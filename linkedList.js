class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null; // first node of list
    this.length = 0; // number of nodes
  }

  // add node to end of list
  addNode(data) {
    const node = new Node(data);

    let current;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.length++;
  }

  // insert node at the given position
  insertAt(data, index) {
    if (index < 0 || index > this.length) {
      console.log('Error: enter the vaild index!');
    } else {
      const node = new Node(data);
      let previous, current;

      current = this.head;

      if (index == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        current = this.head;
        let j = 0;

        while (j < index) {
          j++;
          previous = current;
          current = current.next;
        }

        node.next = current;
        previous.next = node;
      }

      this.length++;
    } 
  }

  // remove node from the given position
  removeFrom(index) {
    if (index < 0 || index > this.length) {
      console.log('Error: enter the valid index!');
    } else {
      let previous, current;

      current = this.head;

      if (index == 0) {
        this.head = current.next;
      } else {
        let j = 0;

        while (j < index) {
          j++;
          previous = current;
          current = current.next;
        }

        previous.next = current.next;
      }
      this.length--;

      return current.data;
    }
  }

  // remove given element from list
  removeElement(element) {
    let current = this.head;
    let previous = null;

    while (current !== null) {
      if (current.data === element) {
        if (previous === null) {
          this.head = current.next;
        } else {
          previous.next = current.next;
        }
        this.length--;
        return current.data;
      }

      previous = current;
      current = current.next;
    }

    return null;
  }

  // find the index of element
  indexOf(element) {
    let current = this.head;

    let index = 0;

    while (current !== null) {
      if (current.data === element) {
        return index;
      }
      index++;
      current = current.next;
    }

    return null;
  }

  // check the list for empty
  isEmpty() {
    return this.length == 0;
  }
}