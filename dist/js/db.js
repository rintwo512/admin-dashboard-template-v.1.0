(function($) {
  (function() {

    var db = {

      loadData: function(filter) {
        return $.grep(this.clients, function(client) {
          return (!filter.Name || client.Name.indexOf(filter.Name) > -1) &&
            (filter.Age === undefined || client.Age === filter.Age) &&
            (!filter.Address || client.Address.indexOf(filter.Address) > -1) &&
            (!filter.Country || client.Country === filter.Country) &&
            (filter.Married === undefined || client.Married === filter.Married);
        });
      },

      insertItem: function(insertingClient) {
        this.clients.push(insertingClient);
      },

      updateItem: function(updatingClient) {},

      deleteItem: function(deletingClient) {
        var clientIndex = $.inArray(deletingClient, this.clients);
        this.clients.splice(clientIndex, 1);
      }

    };

    window.db = db;


    db.countries = [{
        Name: "",
        Id: 0
      },
      {
        Name: "Thailand",
        Id: 1
      },
      {
        Name: "Malaysia",
        Id: 2
      },
      {
        Name: "Singapore",
        Id: 3
      },
      {
        Name: "Filipine",
        Id: 4
      },
      {
        Name: "Vietnam",
        Id: 5
      },
      {
        Name: "Indonesia",
        Id: 6
      },
      {
        Name: "India",
        Id: 7
      }
    ];

    db.clients = [{
        "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
        "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
        "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
        "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
       "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
        "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
        "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
        "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
        "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
        "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
        "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
        "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
        "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
        "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
        "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
        "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
        "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
        "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
        "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
        "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
        "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
        "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
        "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
        "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
       "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
       "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
       "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
        "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
        "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
       "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
       "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
       "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
       "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
       "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
        "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
        "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
       "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
        "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
       "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
        "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
        "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
       "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
        "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
        "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
       "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
       "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
       "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
       "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
        "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
       "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
        "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
       "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
        "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
       "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
       "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
       "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
        "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
       "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
        "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
       "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
       "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
        "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
       "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
       "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
        "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
       "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
        "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
       "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
        "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
       "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
      "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
       "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
       "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
       "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
      "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
       "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
       "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
        "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
      "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
       "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
        "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
       "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
       "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
        "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
       "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
      "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
       "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
       "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
       "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
       "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
      "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
       "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
       "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
       "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
       "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
        "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
        "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
       "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
      "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      },
      {
        "Name": "Name",
        "Age": 28,
        "Country": 6,
        "Address": "Unknown",
        "Married": false
      }
    ];

    db.users = [{
        "ID": "x",
        "Account": "A758A693-0302-03D1-AE53-EEFE22855556",
        "Name": "Your Nama",
        "RegisterDate": "2020-04-20T22:55:52-07:00"
      },
      {
        "Account": "D89FF524-1233-0CE7-C9E1-56EFF017A321",
        "Name": "Your Name",
        "RegisterDate": "2020-02-22T05:59:55-08:00"
      },
      {
        "Account": "D89FF524-1233-0CE7-C9E1-56EFF017A321",
        "Name": "Your Name",
        "RegisterDate": "2020-02-22T05:59:55-08:00"
      },
      {
        "Account": "D89FF524-1233-0CE7-C9E1-56EFF017A321",
        "Name": "Your Name",
        "RegisterDate": "2020-02-22T05:59:55-08:00"
      },
      {
         "Account": "D89FF524-1233-0CE7-C9E1-56EFF017A321",
        "Name": "Your Name",
        "RegisterDate": "2020-02-22T05:59:55-08:00"
      },
      {
        "Account": "D89FF524-1233-0CE7-C9E1-56EFF017A321",
        "Name": "Your Name",
        "RegisterDate": "2020-02-22T05:59:55-08:00"
      },
      {
        "Account": "D89FF524-1233-0CE7-C9E1-56EFF017A321",
        "Name": "Your Name",
        "RegisterDate": "2020-02-22T05:59:55-08:00"
      },
      {
         "Account": "D89FF524-1233-0CE7-C9E1-56EFF017A321",
        "Name": "Your Name",
        "RegisterDate": "2020-02-22T05:59:55-08:00"
      },
      {
        "Account": "D89FF524-1233-0CE7-C9E1-56EFF017A321",
        "Name": "Your Name",
        "RegisterDate": "2020-02-22T05:59:55-08:00"
      },
      {
         "Account": "D89FF524-1233-0CE7-C9E1-56EFF017A321",
        "Name": "Your Name",
        "RegisterDate": "2020-02-22T05:59:55-08:00"
      },
      {
         "Account": "D89FF524-1233-0CE7-C9E1-56EFF017A321",
        "Name": "Your Name",
        "RegisterDate": "2020-02-22T05:59:55-08:00"
      },
      {
        "Account": "D89FF524-1233-0CE7-C9E1-56EFF017A321",
        "Name": "Your Name",
        "RegisterDate": "2020-02-22T05:59:55-08:00"
      },
      {
        "Account": "D89FF524-1233-0CE7-C9E1-56EFF017A321",
        "Name": "Your Name",
        "RegisterDate": "2020-02-22T05:59:55-08:00"
      },
      {
         "Account": "D89FF524-1233-0CE7-C9E1-56EFF017A321",
        "Name": "Your Name",
        "RegisterDate": "2020-02-22T05:59:55-08:00"
      },
      {
        "Account": "D89FF524-1233-0CE7-C9E1-56EFF017A321",
        "Name": "Your Name",
        "RegisterDate": "2020-02-22T05:59:55-08:00"
      },
      {
        "Account": "D89FF524-1233-0CE7-C9E1-56EFF017A321",
        "Name": "Your Name",
        "RegisterDate": "2020-02-22T05:59:55-08:00"
      },
      {
         "Account": "D89FF524-1233-0CE7-C9E1-56EFF017A321",
        "Name": "Your Name",
        "RegisterDate": "2020-02-22T05:59:55-08:00"
      },
      {
         "Account": "D89FF524-1233-0CE7-C9E1-56EFF017A321",
        "Name": "Your Name",
        "RegisterDate": "2020-02-22T05:59:55-08:00"
      },
      {
        "Account": "D89FF524-1233-0CE7-C9E1-56EFF017A321",
        "Name": "Your Name",
        "RegisterDate": "2020-02-22T05:59:55-08:00"
      },
      {
        "Account": "D89FF524-1233-0CE7-C9E1-56EFF017A321",
        "Name": "Your Name",
        "RegisterDate": "2020-02-22T05:59:55-08:00"
      },
      {
         "Account": "D89FF524-1233-0CE7-C9E1-56EFF017A321",
        "Name": "Your Name",
        "RegisterDate": "2020-02-22T05:59:55-08:00"
      },
      {
         "Account": "D89FF524-1233-0CE7-C9E1-56EFF017A321",
        "Name": "Your Name",
        "RegisterDate": "2020-02-22T05:59:55-08:00"
      },
      {
         "Account": "D89FF524-1233-0CE7-C9E1-56EFF017A321",
        "Name": "Your Name",
        "RegisterDate": "2020-02-22T05:59:55-08:00"
      },
      {
        "Account": "D89FF524-1233-0CE7-C9E1-56EFF017A321",
        "Name": "Your Name",
        "RegisterDate": "2020-02-22T05:59:55-08:00"
      },
      {
        "Account": "D89FF524-1233-0CE7-C9E1-56EFF017A321",
        "Name": "Your Name",
        "RegisterDate": "2020-02-22T05:59:55-08:00"
      },
      {
        "Account": "D89FF524-1233-0CE7-C9E1-56EFF017A321",
        "Name": "Your Name",
        "RegisterDate": "2020-02-22T05:59:55-08:00"
      },
      {
         "Account": "D89FF524-1233-0CE7-C9E1-56EFF017A321",
        "Name": "Your Name",
        "RegisterDate": "2020-02-22T05:59:55-08:00"
      }
    ];

  }());
})(jQuery);