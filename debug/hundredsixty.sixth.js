function timeRequiredToBuy(tickets, k) {
    var res = 0;
    var _loop_1 = function () {
        var minTicketCount = Math.min.apply(Math, tickets);
        res +=
            minTicketCount *
                tickets.reduce(function (acc, ticketCount) {
                    var queueCount = ticketCount > 0 ? 1 : 0;
                    return acc + queueCount;
                }, 0);
        tickets = tickets.map(function (ticket) { return ticket - minTicketCount; });
    };
    while (tickets[k]) {
        _loop_1();
    }
    return res;
}
