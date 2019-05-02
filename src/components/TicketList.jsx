import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";

function TicketList(props) {
  return (
    <div>
      <hr />
      {props.ticketList.map(ticket => (
        <Ticket
          names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={ticket.id}
          formattedWaitTime={ticket.formattedWaitTime}
          currentRouterPath={props.currentRouterPath}
          onTicketSelection={props.onTicketSelection}
        />
      ))}
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func
};

export default TicketList;
