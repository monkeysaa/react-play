class Node(object): 
  def __init__(self, data):
    self.data = data
  
  def __repr__(self):
    return "<Node object. Data: {}; Next: {}>".format(self.data, self.next.data if self.next else None,)

class LinkedList(object):
  """ Linked List using head and tail.

  Let's make a list:

  >>> LL = LinkedList()