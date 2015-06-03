if (Meteor.isClient) {
  // counter starts at 0

  Template.hello.onCreated(function(){
    this.subscribe('channels');
    this.subscribe('profiles');
  })

  Template.hello.helpers({
    channelsGroupA: function () {
      return Channels.find().fetch().filter(function(c){
         var key = "channels";
         var value = c._id;
         var selector = {};
         selector[key] = value;
         var ret = Profiles.findOne({$and : [{group : "Group A"}, selector]});
         return (ret)? c : null;
      });
    },
    channelsGroupB: function () {
      return Channels.find().fetch().filter(function(c){
         var key = "channels";
         var value = c._id;
         var selector = {};
         selector[key] = value;
         var ret = Profiles.findOne({$and : [{group : "Group B"}, selector]});
         return (ret)? c : null;
      });
    }
  });

  Template.hello.events({
    'submit form' : function(e,t) {
      e.preventDefault();

      var chId = Channels.insert({name : $('#channel-name').val()});
      var groupVal = $('input[name=group-name]:checked').val();
      var profile = Profiles.findOne({group : groupVal});
      Profiles.update({_id : profile._id}, {$push : {channels : chId}});
    }
  });
}
