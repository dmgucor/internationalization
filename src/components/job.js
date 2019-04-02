import React from "react";
import { FormattedDate, FormattedNumber, FormattedPlural } from "react-intl";

export default class Job extends React.Component {
  ago() {
    var today = new Date();
    return Math.floor(
      Math.abs(today - new Date(this.props.offer.date)) / 1000 / 3600 / 24
    );
  }
  render() {
    return (
      <tr>
        <th scope="row">{this.props.offer.id}</th>
        <td>{this.props.offer.name}</td>
        <td>{this.props.offer.company}</td>
        <td>
          {this.props.offer.salary}
          <FormattedPlural
            value={this.props.offer.salary}
            one=" million"
            other=" millions"
          />
        </td>
        <td>{this.props.offer.city}</td>
        <td>
          <FormattedDate
            value={new Date(this.props.offer.date)}
            year="numeric"
            month="long"
            day="numeric"
            weekday="long"
          />{" "}
          ({this.ago()} days ago)
        </td>
        <td>
          <FormattedNumber value={this.props.offer.views} />
        </td>
      </tr>
    );
  }
}
