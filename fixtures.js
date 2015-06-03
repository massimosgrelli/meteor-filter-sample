if (Meteor.isServer) {
  if (Channels.find().count() === 0) {
    var ch1 = {
      name : 'Green',
    }

    var ch2 = {
      name : 'Red',
    }

    var ch3 = {
      name : 'Yellow',
    }

    var ch4 = {
      name : 'Blue',
    }


    var ch1Id = Channels.insert(ch1);
    var ch2Id = Channels.insert(ch2);
    var ch3Id = Channels.insert(ch3);
    var ch4Id = Channels.insert(ch4);

    Profiles.insert({group : "Group A", channels : [ch1Id, ch2Id]});
    Profiles.insert({group : "Group B", channels : [ch3Id, ch4Id]});
  }  
}
