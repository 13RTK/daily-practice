function lemonadeChange(bills: number[]): boolean {
  let fCnt: number = 0;
  let tCnt: number = 0;

  for (const curBill of bills) {
    if (curBill == 5) {
      fCnt++;
    } else if (curBill == 10) {
      if (fCnt > 0) {
        fCnt--;
        tCnt++;
      } else {
        return false;
      }
    } else {
      if (fCnt > 0 && tCnt > 0) {
        fCnt--;
        tCnt--;
      } else if (fCnt >= 3) {
        fCnt -= 3;
      } else {
        return false;
      }
    }
  }

  return true;
}
