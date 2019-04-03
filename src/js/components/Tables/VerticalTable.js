/* @flow */

import React from "react"

import type {Descriptor, RightClickBuilder} from "../../types"
import Log from "../../models/Log"
import Table, {TableData, TableHeader} from "./Table"

type Props = {
  descriptor: Descriptor,
  log: Log,
  rightClick?: RightClickBuilder
}

export default function VerticalTable({descriptor, log, rightClick}: Props) {
  return (
    <Table className="vertical-table">
      <tbody>
        {descriptor.map((column, index) => (
          <tr key={index}>
            <TableHeader column={column} />
            <TableData
              log={log}
              field={log.getFieldAt(index)}
              rightClick={rightClick}
            />
          </tr>
        ))}
      </tbody>
    </Table>
  )
}