/*
  Before "k" quits the queue:
  1. The person in front of "k" can buy at most the same number of tickets as "k."
  2. The person behind "k" can buy at most one fewer ticket than the number needed by "k."
*/
function timeRequiredToBuy(tickets: number[], k: number): number {
  let res: number = 0;
  let ticketNeed: number = tickets[k];

  for (let i = 0; i < tickets.length; i++) {
    if (i <= k) {
      res += Math.min(tickets[i], ticketNeed);
    } else {
      res += Math.min(tickets[i], ticketNeed - 1);
    }
  }

  return res;
}
