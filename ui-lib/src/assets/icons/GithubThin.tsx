import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function GithubThin({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.07214 21.0794C9.45614 21.1994 9.69614 20.9594 9.69614 20.6474C9.69614 20.6234 9.67214 20.3114 9.67214 19.6874C9.64814 19.1114 9.64814 18.6554 9.64814 18.3434C9.33614 18.4394 8.95214 18.4634 8.68814 18.4634C7.87214 18.4634 6.81614 18.2234 6.50414 17.2154C6.12014 16.5914 5.78414 16.0154 5.44814 15.8234C4.92014 15.4394 4.96814 15.2234 5.52014 15.2234L5.73614 15.2714C6.07214 15.3434 6.64814 15.6794 6.96014 16.2074C7.27214 16.8314 7.80014 17.2394 8.61614 17.2394C8.92814 17.2394 9.31214 17.1674 9.69614 17.0474C9.76814 16.4474 10.0081 16.0394 10.2961 15.7514C9.26414 15.6554 8.80814 15.5834 7.92014 15.1994C7.48814 15.0314 7.20014 14.8154 6.96014 14.5274C6.50414 13.9754 6.07214 12.9674 6.07214 11.5274C6.07214 10.7354 6.36014 9.99139 6.96014 9.34339C6.64814 8.59939 6.69614 7.73539 7.05614 6.77539C7.72814 6.58339 8.90414 7.30339 9.64814 7.83139C10.4161 7.59139 11.2081 7.47139 12.0241 7.47139C12.8401 7.47139 13.6561 7.59139 14.4241 7.83139L14.8801 7.47139C15.4801 7.01539 16.5361 6.65539 17.0161 6.77539C17.3761 7.73539 17.4001 8.59939 17.0641 9.34339C17.8081 10.1114 18.0721 10.5914 18.0721 11.5274C18.0721 13.3514 17.5441 14.6954 16.1521 15.1994C15.2641 15.5834 14.8561 15.6074 13.7521 15.7514C14.1841 16.0874 14.3761 16.6394 14.3761 17.4794C14.3761 17.9834 14.3761 18.6314 14.3761 19.4234V20.6474C14.3761 20.9594 14.6161 21.1994 15.0241 21.0794C18.8161 19.8314 21.3601 16.2554 21.3601 12.1034C21.3601 6.82339 17.0881 2.88739 12.0001 2.88739C6.96014 2.88739 2.64014 6.84739 2.64014 12.1034C2.64014 16.2554 5.25614 19.8314 9.07214 21.0794ZM5.90414 15.6074C5.88014 15.6554 5.90414 15.7034 6.02414 15.7514C6.07214 15.7994 6.12014 15.7754 6.16814 15.7034C6.19214 15.6794 6.16814 15.6314 6.07214 15.5594C6.02414 15.5354 5.95214 15.5594 5.90414 15.6074ZM6.28814 15.8954C6.26414 15.9434 6.26414 15.9914 6.33614 16.0874C6.43214 16.1354 6.50414 16.1594 6.52814 16.1114C6.57614 16.0634 6.57614 15.9914 6.50414 15.9194C6.43214 15.8714 6.33614 15.8474 6.28814 15.8954ZM6.69614 16.3754C6.57614 16.3994 6.74414 16.8074 6.91214 16.6874C6.96014 16.6154 6.96014 16.5434 6.91214 16.4474C6.84014 16.3274 6.74414 16.3034 6.69614 16.3754ZM7.12814 16.9274C7.05614 16.9994 7.05614 17.0714 7.20014 17.1674C7.27214 17.2874 7.36814 17.2874 7.44014 17.2154C7.48814 17.1434 7.44014 17.0714 7.36814 16.9514C7.27214 16.8554 7.20014 16.8314 7.12814 16.9274ZM7.89614 17.5754C8.01614 17.6234 8.08814 17.5994 8.11214 17.5034C8.13614 17.4074 8.08814 17.3354 7.96814 17.3114C7.72814 17.2394 7.60814 17.5274 7.89614 17.5754ZM8.49614 17.5514C8.49614 17.6714 8.59214 17.7194 8.71214 17.6954C8.85614 17.6954 8.92814 17.6234 8.92814 17.5514C8.92814 17.4554 8.83214 17.4074 8.68814 17.4314C8.56814 17.4314 8.49614 17.4794 8.49614 17.5514ZM9.38414 17.3114C9.14414 17.3594 9.19214 17.6714 9.43214 17.5994C9.67214 17.5274 9.62414 17.3114 9.38414 17.3114Z" fill={color} /></svg>;
}

export default GithubThin;