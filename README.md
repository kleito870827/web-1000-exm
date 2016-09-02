1-Name and describe the two main operations of a stack (to add and remove data).
to add: push
Description: Pushes (adds) the specified data into the Stack and makes it the top node. It also increases the stack count by 1.
remove: pop
Description: It looks quite similar to the PEEK() method, but it also removes the top item and decreases the count by 1.

2-Name and describe the two main operations of a queue (to add and remove data).
to add: enqueue
Description: Adds an item at the front of the queue. The process is the same as PUSH from stack, but I changed for the sake of the exercise.
remove: dequeue
Description: Removes and returns the last item inserted and stored which would be the one at the opposite side of the queue.

3-Draw the tree resulting from adding the following sequence of numbers to an empty tree: 30, 45, 15, 10, 50, 40, 20, 27    
--------------------30  

------------15--------------45    

--------10----20---------40----50  

-----------------27  

4-Is this tree balanced? If not, which rotation needs to be done? (Use the following rotation as an example: rightRotation(30), or leftRotation(10))

5-Now add 29. Is the tree balanced? If not, which rotation needs to be done? (Use the following rotation as an example:   rightRotation(30), or leftRotation(10))  

leftRotation:(20)
--------------------30    

------------15--------------45      

--------10----27---------40----50    

-----------20----29  



Consider the following tree:
------5
---2-----8
-1---3

6-Now add 0 to the tree. Which one is the first node to go out of balance?

----------5
-------2-----8
-----1---3
---0

node 0.
7-How do you fix this node? (Use the following rotation as an example: rightRotation(30), or leftRotation(10))

rightRotation(5)

----------2
-------1-----5
-----0-----3---8  



8-What are the four main steps of mergesort?

1-cut array in half
2-mergesort left
3-mergesrot right
4-merge sorted halves

9-What are the four main steps of quicksort?

1-choose pivot
2-traverse all got pivot
3-traverse original array, add elements <= pivot to left, add > pivot to right
4- return quicksort(left) + pivot + quicksort(right)

10-What is an angular directive?

directives are markers on a DOM element (such as an attribute, element name, comment or CSS class) that tell AngularJS's HTML compiler ($compile) to attach a specified behavior to that DOM element (e.g. via event listeners), or even to transform the DOM element and its children.

11-When specifying an angular directive, you write a function which must return an object called: a. Directive Constructor b. Fidel y Chavez Object c. Directive Definition object d. Directive Object

Directive Object;


12-What is the relationship between html, the $scope construct, and angular expressions? (Expressions are the ones that are written like so: {{quote}} ).

The scope is the binding part between the HTML and the JavaScript.


13-In order to send ajax requests in Angular, you need to create an angular: a. Module
b. Service c. Controller d. $http

1-Module
2-Controller
3-$http
4-Service

14-In order to create a service, you must use the following angular function: a. angularApp.controller b. angularApp.module c. angularApp.directive d. angularApp.factory

1-angularApp.module
2-angularApp.controller
3-angularApp.directive
4-angularApp.factory


15-Go to my angular projects github repo and do one of them. Don't clone the repository, but rather add all the files to the folder which corresponds to your github repo. Add the files right at the root of your repo, not within a subfolder.
