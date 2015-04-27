import Ember from 'ember';

export default Ember.Controller.extend({

     actions:{

       addMessage: function(){

            var newMsg = this.store.createRecord
            ( 'message', {
                name: this.get('name'),
                message: this.get('body')

            } );

            newMsg.save();
            this.setProperties({
                 name: '',
                 body: ''
               }  );

var newDoc = this.store.createRecord
            ( 'document', {
                doc: this.get('doc'),
                format: this.get('format'),
                rundate: new Date()

            } );

            newDoc.save();
            this.setProperties({
                 doc:'',
                 format:''
               }  );



       }

     }
});
