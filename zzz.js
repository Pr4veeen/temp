
// class Node {
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor(){
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     prepend(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//             this.tail = node
//             this.tail.next = this.head
//         }else{
//             node.next = this.head
//             this.head = node
//             this.tail.next = this.head
//         }
//         this.size++
//     }

//     append(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//             this.tail = node
//             this.tail.next = this.head
//         }else{
//             this.tail.next = node
//             this.tail = node
//             this.tail.next = this.head
//         }
//         this.size++
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log("List Is Empty")
//             return
//         }
//         let result = ""
//         let curr = this.head
//         do {
//             result +=`${curr.value} `
//             curr = curr.next
//         } while (curr !== this.head);
//         console.log(result)
//     }
// }


// const List = new LinkedList()

// List.append(10)
// List.append(20)
// List.prepend(30)
// List.prepend(40)
// List.print()


class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class ArrayToList {
    constructor(){
        this.head = null
        this.size = 0
    }

    Array(arr){
        if(arr.length === 0){
            return null
        }

        this.head = new Node(arr[0])
        let curr = this.head

        for(let i=1;i<arr.length;i++){
            curr.next = new Node(arr[i])
            curr = curr.next
        }
    }

    prepend(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
        }else{
            let curr = this.head
            while(curr.next){
                curr = curr.next
            }
            curr.next = node
        }
        this.size++
    }

    reverse(){
        let prev = null
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    insertValue(value, index){
        const node = new Node(value)
        if(index < 0 || index > this.size){
            return null
        }
        if(index === 0){
            node.next = this.head
            this.head = node
        }
        else{
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
        }
        this.size++
    }

    removeIndex(index){
        if(index < 0 || index > this.size-1){
            return null
        }
        if(index === 0){
            this.head = this.head.next
        }else{
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            let removeNode = prev.next
            prev.next = removeNode.next
        }
        this.size--
    }

    removeValue(value){
        if(!this.head) return null

        if(this.head.value === value){
            this.head = this.head.next
            this.size--
        }else{
            let prev = this.head
            while(prev.next && prev.next.value !== value){
                prev = prev.next
            }
            if(prev.next){
                prev.next = prev.next.next
                this.size--
            }
        }
    }

    print(){
        let result = ""
        let curr = this.head
        while(curr){
            result +=`${curr.value} `
            curr = curr.next
        }
        console.log(result)
    }
}

const List = new ArrayToList()

// let arr = [1 ,2 ,3 ,4 ,5]
// List.Array(arr)
// List.print()

List.prepend(10)
List.prepend(20)
List.append(30)
List.append(40)
List.print()

List.reverse()
List.print()

List.insertValue(100,0)
List.print()

List.removeIndex(4)
List.print()

List.removeValue(100)
List.print()


