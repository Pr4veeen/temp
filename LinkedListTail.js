
class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class LinkedListWithTail {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size ===0 
    }

    getSize(){
        return this.size
    }

    print(){
        if(this.isEmpty()){
            console.log("Linked List is Empty")
        }else{
            let curr = this.head;
            let result = ""
            while(curr){
                result += `${curr.value} `
                curr = curr.next
            }
            console.log(result)
        }
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
            this.tail = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node
        }
        this.size++
    }

    removeFromFront(){
        if(this.isEmpty()){
            return null
        }

        const value = this.head.value;
        this.head = this.head.next
        this.size--;
        return value
    }

    removeFromEnd(){
        if(this.isEmpty()){
            return null
        }

        const value = this.tail;
        if(this.size === 1){
            this.head = null;
            this.tail = null;
        }else{
            let prev = this.head;
            while(prev.next !== this.tail){
                prev = prev.next
            }
            prev.next = null;
            this.tail = prev
        }
        this.size--
        return value
    }
}

const List = new LinkedListWithTail()
console.log("List is Empty ? ",List.isEmpty())
List.print()

List.append(10)
List.append(20)
List.append(30)
List.prepend(40)
List.print()

console.log("Size of List : ",List.getSize())

List.removeFromFront()
List.print()

List.removeFromEnd()
List.print()

console.log("Size of List : ",List.getSize())