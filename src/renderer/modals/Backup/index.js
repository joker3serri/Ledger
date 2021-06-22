// @flow
import React, {useCallback} from "react";
import styled from "styled-components";
import { Trans, useTranslation } from "react-i18next";
// icons
import IconHelp from "~/renderer/icons/Help";
import IconChevronRight from "~/renderer/icons/ChevronRight";
import Text from "~/renderer/components/Text";
import TrackPage from "~/renderer/analytics/TrackPage";
import { SideDrawer } from "~/renderer/components/SideDrawer";
import Box from "~/renderer/components/Box";
import resolveUserDataDirectory from "~/helpers/resolveUserDataDirectory.js";
import { ipcRenderer, remote } from "electron";
import path from "path";
import fs from "fs";
import moment from "moment";
import { hardReset, reload } from "~/renderer/reset";
import rimraf from "rimraf";
import { TopBannerContainer } from "~/renderer/screens/dashboard";
import Alert from "~/renderer/components/Alert";
//import DropboxFrame from ".DropboxFrame";

const userDataPath = resolveUserDataDirectory();
const userDataFile = path.resolve(userDataPath, "app.json");

/* const exportBackup = async (
  fromPath: { canceled: Boolean, filePath: string },
  toPath: { canceled: Boolean, filePath: string },
  callback?: () => void,
) => {
  try {
    const res = await ipcRenderer.invoke("export-backup", fromPath, toPath);
    if (res && callback) {
      callback();
    }
  } catch (error) {}
};
*/

const ItemContainer = styled.a`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  cursor: pointer;
  text-decoration: none;
  &:not(:last-child) {
    border-bottom: 1px solid ${p => p.theme.colors.palette.divider};
  }
  & ${Box} svg {
    color: ${p => p.theme.colors.palette.text.shade50};
  }
  &:hover {
    filter: brightness(85%);
  }
  &:active {
    filter: brightness(60%);
  }
`;
const IconContainer = styled.div`
  color: ${p => p.theme.colors.palette.primary.main};
  display: flex;
  align-items: center;
`;

const Item = ({
  Icon,
  title,
  desc,
  onClick,
}: {
  Icon: any,
  title: string,
  desc: string,
  onClick: () => void,
}) => {
  return (
    <ItemContainer onClick={onClick}>
      <IconContainer>
        <Icon size={24} />
      </IconContainer>
      <Box ml={12} flex={1}>
        <Text ff="Inter|SemiBold" fontSize={4} color={"palette.text.shade100"}>
          {title}
        </Text>
        <Text ff="Inter|Regular" fontSize={3} color={"palette.text.shade60"}>
          {desc}
        </Text>
      </Box>
      <Box>
        <IconChevronRight size={12} />
      </Box>
    </ItemContainer>
  );
};

const BackupSideDrawer = ({ isOpened, onClose }: { isOpened: boolean, onClose: () => void }) => {
  const { t } = useTranslation();
  return (
    <SideDrawer isOpen={isOpened} onRequestClose={onClose} direction="left">
      <>
        <TrackPage category="SideDrawer" name="Help" />

        <Box py={60} px={40}>
          <Text ff="Inter|SemiBold" fontSize={22} mb={20} color={"palette.text.shade100"}>
            Live in the Cloud
          </Text>
          <Alert type="warning" style={{ flexGrow: 0 }}>
            <Text>
              For security reason, make sure that you have passwordlock enabled for you app before
              generating the backup file
            </Text>
          </Alert>
          <ItemContainer>
            <Item
              onClick={async () => {
                const toPath = await remote.dialog.showSaveDialog(remote.getCurrentWindow(), {
                  title: "Exported user data",
                  defaultPath: `backup-Ledger-Live-${moment().format("YYYY.MM.DD")}.json`,
                  filters: [
                    {
                      name: "json Files",
                      extensions: ["json"],
                    },
                  ],
                });
                if (toPath) {
                  ipcRenderer.invoke("export-backup", userDataFile, toPath);
                }
              }}
              title={t("Back up your Live")}
              desc={t("Save your data locally")}
              Icon={IconHelp}
            />
          </ItemContainer>
          <ItemContainer>
            <Item
              onClick={async () => {
                const backupFile = await remote.dialog.showOpenDialog(remote.getCurrentWindow(), {
                  title: "Backup file to import",
                  properties: ["openFile"],
                  filters: [
                    {
                      name: "json Files",
                      extensions: ["json"],
                    },
                  ],
                });
                await hardReset();
                await rimraf(userDataPath, function() {
                  console.log("user data deleted");
                });
                await fs.mkdir(userDataPath);
                await fs.copyFile(backupFile.filePaths[0], `${userDataPath}/app.json`, err => {
                  console.log("Error: ", err);
                });
                await reload();
              }}
              title={t("Restore your Live")}
              desc={t("Import your data live locally")}
              Icon={IconHelp}
            />
          </ItemContainer>
          <ItemContainer>
            <Item
              title={t("Backup with Dropbox")}
              desc={t("Connect Live with your Dropbox account")}
              Icon={IconHelp}
            />
          </ItemContainer>
        </Box>
      </>
    </SideDrawer>
  );
};
export default BackupSideDrawer;
