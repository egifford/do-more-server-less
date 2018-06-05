import React from 'react';
import {
  Text,
  Table,
  TableRow,
  TableHeaderItem,
  TableItem
} from 'spectacle';

const LanguageTable = props => (
      <Table textColor="primary" bgColor="tertiary">
        <thead>
          <TableRow>
            <TableHeaderItem>
              Platform
            </TableHeaderItem>
            <TableHeaderItem>
              JavaScript
            </TableHeaderItem>
            <TableHeaderItem>
              Python
            </TableHeaderItem>
            <TableHeaderItem>
              C#
            </TableHeaderItem>
            <TableHeaderItem>
              Go
            </TableHeaderItem>
            <TableHeaderItem>
              Java
            </TableHeaderItem>
            <TableHeaderItem>
              F#
            </TableHeaderItem>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableItem>
              AWS Lambda
            </TableItem>
            <TableItem>
              <Text textColor="green"> &#10003; </Text>
            </TableItem>
            <TableItem>
              <Text textColor="green"> &#10003; </Text>
            </TableItem>
            <TableItem>
              <Text textColor="green"> &#10003; </Text>
            </TableItem>
            <TableItem>
              <Text textColor="green"> &#10003; </Text>
            </TableItem>
            <TableItem>
              <Text textColor="green"> &#10003; </Text>
            </TableItem>
            <TableItem>
              <Text textColor="red"> &#10005; </Text>
            </TableItem>
          </TableRow>
          <TableRow>
            <TableItem>
              Google Cloud Function
            </TableItem>
            <TableItem>
              <Text textColor="green"> &#10003; </Text>
            </TableItem>
            <TableItem>
              <Text textColor="red"> &#10005; </Text>
            </TableItem>
            <TableItem>
              <Text textColor="red"> &#10005; </Text>
            </TableItem>
            <TableItem>
              <Text textColor="red"> &#10005; </Text>
            </TableItem>
            <TableItem>
              <Text textColor="red"> &#10005; </Text>
            </TableItem>
            <TableItem>
              <Text textColor="red"> &#10005; </Text>
            </TableItem>
          </TableRow>
          <TableRow>
            <TableItem>
              Azure Functions
            </TableItem>
            <TableItem>
              <Text textColor="green"> &#10003; </Text>
            </TableItem>
            <TableItem>
              <Text textColor="red"> &#10005; </Text>
            </TableItem>
            <TableItem>
              <Text textColor="green"> &#10003; </Text>
            </TableItem>
            <TableItem>
              <Text textColor="red"> &#10005; </Text>
            </TableItem>
            <TableItem>
              <Text textColor="red"> &#10005; </Text>
            </TableItem>
            <TableItem>
              <Text textColor="green"> &#10003; </Text>
            </TableItem>
          </TableRow>
          <TableRow>
            <TableItem>
              IBM OpenWhisk
            </TableItem>
            <TableItem>
              <Text textColor="green"> &#10003; </Text>
            </TableItem>
            <TableItem>
              <Text textColor="green"> &#10003; </Text>
            </TableItem>
            <TableItem>
              <Text textColor="green"> &#10003; </Text>
            </TableItem>
            <TableItem>
              <Text textColor="green"> &#10003; </Text>
            </TableItem>
            <TableItem>
              <Text textColor="green"> &#10003; </Text>
            </TableItem>
            <TableItem>
              <Text textColor="green"> &#10003;*</Text>
            </TableItem>
          </TableRow>
        </tbody>
      </Table>
);

export default LanguageTable;
