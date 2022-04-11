function Node(val){
  this.value = val
  this.left = null
  this.right = null
}
function BTree(){
  this.root = null
  this.append = function(val){
    if(!this.root){
      return this.root = new Node(val)
    }
    this._appendHelper(val, this.root)
  }
  this._appendHelper = function(val, current){
    if(current.value>val){
      return !current.left? current.left = new Node(val)
        :this._appendHelper(val, current.left)
    }
    return !current.right? current.right = new Node(val)
        :this._appendHelper(val, current.right)
  }
}
// set up the tree
const binaryTree = new BTree()
binaryTree.append(5)    
binaryTree.append(3)   //     _ 5 _
binaryTree.append(4)   //  _ 3_    7_
binaryTree.append(7)   // 1   4      9
binaryTree.append(9) 
binaryTree.append(1) 


// iterative
function depthFirstSearch(root){
  const stack = [root]
  const visitedNodes = new Set()
  
  while(stack.length>0){
    const curr = stack.pop()
    if(curr.left) stack.push(curr.left)
    if(curr.right) stack.push(curr.right)
    
    visitedNodes.add(curr.value)
  }
  return visitedNodes
}
// driver code
console.log(depthFirstSearch(binaryTree.root))


// recursive 
const visited = []
function depthFirstSearchRecursive(root){
  if(root === null) return
  data.push(root.value)
  
  depthFirstSearchRecursive(root.left)
  depthFirstSearchRecursive(root.right)

  
  return visited
}
// driver code
console.log(depthFirstSearchRecursive(binaryTree.root))
