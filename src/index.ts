class MinifyIssueRepro {
  el1: HTMLElement | null = null;
  el2: HTMLElement | null = null;

  get example() {
    const one = this.el1?.getBoundingClientRect().height ?? 0;
    const two = this.el2?.getBoundingClientRect().height ?? 0;
    return two - one;
  }
}

new MinifyIssueRepro();