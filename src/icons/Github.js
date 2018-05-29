// @flow

import React from 'react'

const path = (
  <path
    fill="currentColor"
    d="M5.184 12.169c0 .062-.072.112-.162.112-.103.01-.175-.04-.175-.112 0-.063.072-.113.162-.113.094-.01.175.04.175.113zm-.971-.14c-.022.062.04.133.134.152.081.032.175 0 .194-.062.018-.063-.041-.135-.135-.163-.081-.022-.172.01-.193.072zm1.38-.054c-.09.022-.152.081-.143.153.01.063.09.103.184.081.091-.021.153-.08.144-.143-.01-.06-.094-.1-.184-.091zM7.65 0C3.316 0 0 3.29 0 7.625c0 3.466 2.181 6.431 5.297 7.475.4.072.54-.175.54-.378 0-.194-.009-1.263-.009-1.919 0 0-2.187.469-2.647-.931 0 0-.356-.91-.869-1.144 0 0-.715-.49.05-.481 0 0 .779.062 1.207.806.684 1.206 1.831.86 2.278.653.072-.5.275-.847.5-1.053-1.747-.194-3.51-.447-3.51-3.453 0-.86.238-1.29.738-1.84-.081-.204-.347-1.041.081-2.123.653-.203 2.156.844 2.156.844a7.342 7.342 0 0 1 1.963-.265c.666 0 1.338.09 1.963.265 0 0 1.503-1.05 2.156-.844.428 1.085.162 1.92.081 2.122.5.553.806.985.806 1.841 0 3.016-1.84 3.256-3.587 3.453.287.247.531.716.531 1.45 0 1.053-.01 2.356-.01 2.613 0 .203.144.45.541.378 3.125-1.038 5.244-4.003 5.244-7.469C15.5 3.291 11.984 0 7.65 0zM3.037 10.778c-.04.031-.03.103.022.163.05.05.122.071.163.03.04-.03.031-.102-.022-.162-.05-.05-.122-.071-.163-.03zm-.337-.253c-.022.04.01.09.072.122.05.031.112.022.134-.022.022-.04-.01-.09-.072-.122-.062-.019-.112-.01-.134.022zm1.012 1.112c-.05.041-.03.135.041.194.072.072.163.082.203.032.04-.041.022-.135-.04-.194-.07-.072-.163-.082-.204-.032zm-.356-.459c-.05.031-.05.113 0 .184.05.072.135.104.175.072.05-.04.05-.121 0-.193-.044-.072-.125-.104-.175-.063z"
  />
)

export default ({ size, ...p }: { size: number }) => (
  <svg viewBox="0 0 16 16" height={size} width={size} {...p}>
    {path}
  </svg>
)
