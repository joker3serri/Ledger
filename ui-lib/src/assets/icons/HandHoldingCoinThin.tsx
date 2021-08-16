import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function HandHoldingCoinThin({ size = 16, color = "currentColor" }: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.87198 19.5314C9.11998 20.2514 10.68 20.2034 12.288 19.4354L20.832 15.3794C21.264 15.1874 21.624 14.6834 21.624 14.0594C21.624 13.3154 20.976 12.7394 20.304 12.7394C19.944 12.7394 19.8 12.8114 18.816 13.2674L18.696 13.0274C18.336 12.2594 17.448 11.9714 16.728 12.2834L13.68 13.5794C13.8 13.6514 13.92 13.7954 13.992 13.9874L16.92 12.7154C17.424 12.4994 18.024 12.6914 18.264 13.2194L18.36 13.4594L12.552 16.0994C13.104 15.2834 12.768 14.2514 11.952 13.8914L8.54398 12.3314C6.23998 11.2754 4.17598 11.5634 2.37598 13.4594V18.3554H2.85598V13.6514C4.46398 12.0434 6.26398 11.8034 8.35198 12.7634L11.76 14.3234C12.096 14.4674 12.336 14.8514 12.336 15.2354C12.336 15.9314 11.568 16.4354 10.944 16.1474L7.41598 14.5154L7.22398 14.9474L10.608 16.5314C11.352 16.8674 12.048 16.8434 13.224 16.3154L19.896 13.2914C20.472 13.0274 21.144 13.4354 21.144 14.0594C21.144 14.4434 20.952 14.8034 20.64 14.9474L12.072 19.0034C10.584 19.6994 9.21598 19.7474 8.11198 19.1234L5.92798 17.8994L5.68798 18.3074L7.87198 19.5314ZM9.69598 6.47538C9.69598 7.86738 10.824 8.99538 12.216 8.99538C13.608 8.99538 14.736 7.86738 14.736 6.47538C14.736 5.08338 13.608 3.95538 12.216 3.95538C10.824 3.95538 9.69598 5.08338 9.69598 6.47538ZM10.176 6.47538C10.176 5.34738 11.088 4.43538 12.216 4.43538C13.344 4.43538 14.256 5.34738 14.256 6.47538C14.256 7.60338 13.344 8.51538 12.216 8.51538C11.088 8.51538 10.176 7.60338 10.176 6.47538Z" fill={color} /></svg>;
}

export default HandHoldingCoinThin;