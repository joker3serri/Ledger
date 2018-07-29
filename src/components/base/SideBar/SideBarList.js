// @flow

import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import type { DropResult, DroppableProvided, DraggableProvided } from 'react-beautiful-dnd'

import GrowScroll from 'components/base/GrowScroll'
import Box from 'components/base/Box'
import Space from 'components/base/Space'

type Props = {
  children: any,
  title?: Node | string,
  scroll?: boolean,
  titleRight?: any,
  emptyState?: any,
  onReorder?: ({ from: number, to: number }) => void,
}

class SideBarList extends Component<Props> {
  onDragEnd = (result: DropResult) => {
    const { onReorder } = this.props
    if (!result.destination) {
      return
    }
    if (onReorder) {
      onReorder({
        from: result.source.index,
        to: result.destination.index,
      })
    }
  }

  renderChildren() {
    const { children, onReorder } = this.props
    if (!onReorder) {
      return children
    }
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="sidebarList">
          {(provided: DroppableProvided) => (
            <div ref={provided.innerRef}>
              {React.Children.map(children, (child, index) => (
                <Draggable key={child.key} draggableId={child.key} index={index}>
                  {(provided: DraggableProvided) => (
                    <div
                      key={child.key}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {child}
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    )
  }

  render() {
    const { children, title, scroll, titleRight, emptyState, ...props } = this.props
    const ListWrapper = scroll ? GrowScroll : Box
    return (
      <Fragment>
        {!!title && (
          <Fragment>
            <SideBarListTitle>
              {title}
              {!!titleRight && <Box ml="auto">{titleRight}</Box>}
            </SideBarListTitle>
            <Space of={20} />
          </Fragment>
        )}
        {children && children.length ? (
          <ListWrapper flow={2} px={3} fontSize={3} {...props}>
            {this.renderChildren()}
          </ListWrapper>
        ) : emptyState ? (
          <Box px={4} ff="Open Sans|Regular" selectable fontSize={3} color="grey">
            {emptyState}
          </Box>
        ) : null}
      </Fragment>
    )
  }
}

const SideBarListTitle = styled(Box).attrs({
  horizontal: true,
  align: 'center',
  color: 'dark',
  ff: 'Museo Sans|ExtraBold',
  fontSize: 1,
  px: 4,
})`
  cursor: default;
  letter-spacing: 2px;
  text-transform: uppercase;
`

export default SideBarList
