import React, { Component } from 'react';

class List extends Component {

    tickets = [
        {
            id: '1',
            ticketNo: 'ABCDEFG12345',
            type: 'Order Return',
            status: 'Pending'
        },
        {
            id: '2',
            ticketNo: 'ABCDEFG12345',
            type: 'Refund',
            status: 'Resolved'
        },
        {
            id: '3',
            ticketNo: 'ABCDEFG12345',
            type: 'Order cancel',
            status: 'Resolved'
        },
        {
            id: '4',
            ticketNo: 'ABCDEFG12345',
            type: 'Order cancel',
            status: 'Resolved'
        },
        {
            id: '5',
            ticketNo: 'ABCDEFG12345',
            type: 'Order cancel',
            status: 'Resolved'
        }
    ];


    render() {
        return (
            <div>
                <div className="mr-3 ml-3 rounded mt-4 pr-2 pl-2 pt-2" style={{ backgroundColor: '#8EE4AF', height: '390px',overflowY: 'scroll' }}>
                    {this.tickets.map((ticket, index) => (
                        <div key={index}>
                            <div className="row align-items-center rounded border mr-2 ml-2 mt-3 mb-2" style={{ backgroundColor: '#FFFFFF' }}>
                                <div className="col-1 pl-4">
                                    <h6>{ticket.id}</h6>
                                </div>
                                <div className="col-7 pt-3 pb-3">
                                    <h6 style={{ 'margin': 0 }}>Ticket No: {ticket.ticketNo}</h6>
                                    <h6>Type: {ticket.type}</h6>
                                </div>
                                <div className="col-4">
                                    <h5>Status: {ticket.status}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
export default List;