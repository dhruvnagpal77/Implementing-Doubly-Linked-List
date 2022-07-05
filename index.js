class Node{
  constructor(value){
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList{
  constructor(value){
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value){
    const newNode = new Node(value);
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
  }

  prepend(value){
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }

  getNode(index){
    let currentNode = this.head;
    let counter = 0;
    while (counter != index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  insert(value, index){
    if (index <= 0){
      this.prepend(value);
      return;
    }
    if (index >= this.length){
      this.append(value);
      return;
    }
    const newNode = new Node(value);
    let nodeToTheLeft = this.getNode(index - 1);
    let nodeToRight = nodeToTheLeft.next;
    newNode.next = nodeToRight;
    newNode.prev = nodeToTheLeft;
    nodeToTheLeft.next = newNode;
    nodeToRight.prev = newNode;
    this.length++;
  }

  remove(index){
    // if head
    if (index == 0){
      // if only one node on list
      if (this.head == this.tail){
        this.head = null;
        this.tail = null;
        this.length = 0;
        return;
      }
      let nodeToRight = this.head.next;
      this.head.next = null;
      nodeToRight.prev = null
      this.head = nodeToRight;
      this.length--;
      return;
    }
    let nodeToTheLeft = this.getNode(index - 1);
    let nodeToDelete = nodeToTheLeft.next;
    let nodeToRight = nodeToDelete.next;
    nodeToDelete.next = null;
    nodeToDelete.prev = null;
    nodeToTheLeft.next = nodeToRight;
    this.length--;
    // if tail
    if (nodeToRight == null){
      this.tail = nodeToTheLeft;
      return;
    }
    nodeToRight.prev = nodeToTheLeft
  }

  printList(){
    const arrayOfLinkListValues = [];
    let currentNode = this.head;
    while (currentNode != null){
      arrayOfLinkListValues.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arrayOfLinkListValues;
  }

}
const myDoublyLinkedList = new DoublyLinkedList(50);
 myDoublyLinkedList.append(70);
 myDoublyLinkedList.append(80);
 myDoublyLinkedList.prepend(10);
 myDoublyLinkedList.insert(60,2);
 myDoublyLinkedList.insert(40,0);
 myDoublyLinkedList.remove(1);
 myDoublyLinkedList.remove(1);
 myDoublyLinkedList.remove(3);
console.log(myDoublyLinkedList);
console.log(myDoublyLinkedList.printList());