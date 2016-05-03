var Graph = {
  'nodes':[
    {
      'location':{
        lat: 0,
        lng: 0
      },
      'connections':[
        1,
        2
      ]
    },
    {
      'location':{
        lat: 1,
        lng: 1
      },
      'connections':[
        0,
        3
      ]
    },
    {
      'location':{
        lat: 1,
        lng: 3
      },
      'connections':[
        0,
        3
      ]
    },
    {
      'location':{
        lat: 2,
        lng: 2
      },
      'connections':[
        1,
        3
      ]
    }
  ]
}

var queue = {
  priority:[],
  add_with_priority : function(key, distance) {
    queue.priority.push({key: key, distance: distance});
    queue.sort();
  },
  decrease_priority : function(key, distance) {
    queue.add_with_priority(key, distance);
  },
  extract_min : function() {
     return queue.priority.shift()
  },
  sort : function() {
    queue.priority.sort(function(a, b) {
      return a.distance>b.distance;
    });
  }
}

function Dijstra(nodes, source) {
  var infinity = Infinity;
  var distance = new Array();
  var previous = new Array();
  for(i=0; i < nodes.length; i++) {
    if(nodes[i] != source) {
      distance[i] = infinity;
      previous[i] = undefined;
    }else {
      distance[i] = 0;
    }
    queue.add_with_priority(i, distance[i]);
  }

  console.log(queue);

  while(!queue.priority.lenght > 0) {
    current_min_priority = queue.extract_min();
    current_min_key = current_min_priority.key;
    current_min_node = nodes[current_min_key];
    current_min_distance = current_min_priority.distance;
    console.log(current_min_priority);
    console.log(current_min_node);
    console.log(current_min_distance);
    for(connection in current_min_node.connections) {
      neighnbor_node = nodes[connection];
      neighnbor_key = connection;
      distance_from_current_node = distance[neighnbor_key] + ;
      console.log(neighnbor);
    }
    break;
  }

}

Dijstra(Graph.nodes, Graph.nodes[1]);
