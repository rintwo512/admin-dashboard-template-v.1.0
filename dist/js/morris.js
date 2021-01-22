$(function() {
  'use strict';
  if ($('#morris-line-example').length) {
    Morris.Line({
      element: 'morris-line-example',
      lineColors: ['#63CF72', '#F36368', '#76C1FA', '#FABA66'],
      data: [{
          y: '2014',
          a: 100,
          b: 150
        },
        {
          y: '2015',
          a: 75,
          b: 65
        },
        {
          y: '2016',
          a: 50,
          b: 40
        },
        {
          y: '2017',
          a: 75,
          b: 65
        },
        {
          y: '2018',
          a: 50,
          b: 40
        },
        {
          y: '2019',
          a: 75,
          b: 65
        },
        {
          y: '2021',
          a: 100,
          b: 90
        }
      ],
      xkey: 'y',
      ykeys: ['a', 'b'],
      labels: ['Series A', 'Series B']
    });
  }
  if ($('#morris-area-example').length) {
    Morris.Area({
      element: 'morris-area-example',
      lineColors: ['#76C1FA', '#F36368', '#63CF72', '#FABA66'],
      data: [{
          y: '2014',
          a: 100,
          b: 90
        },
        {
          y: '2015',
          a: 75,
          b: 105
        },
        {
          y: '2016',
          a: 50,
          b: 40
        },
        {
          y: '2017',
          a: 75,
          b: 65
        },
        {
          y: '2018',
          a: 50,
          b: 40
        },
        {
          y: '2019',
          a: 75,
          b: 65
        },
        {
          y: '2020',
          a: 100,
          b: 90
        }
      ],
      xkey: 'y',
      ykeys: ['a', 'b'],
      labels: ['Series A', 'Series B']
    });
  }
  if ($("#morris-bar-example").length) {
    Morris.Bar({
      element: 'morris-bar-example',
      barColors: ['#63CF72', '#F36368', '#76C1FA', '#FABA66'],
      data: [{
          y: '2014',
          a: 100,
          b: 90
        },
        {
          y: '2015',
          a: 75,
          b: 65
        },
        {
          y: '2016',
          a: 50,
          b: 40
        },
        {
          y: '2017',
          a: 75,
          b: 65
        },
        {
          y: '2018',
          a: 50,
          b: 40
        },
        {
          y: '2019',
          a: 75,
          b: 65
        },
        {
          y: '2020',
          a: 100,
          b: 90
        }
      ],
      xkey: 'y',
      ykeys: ['a', 'b'],
      labels: ['Series A', 'Series B']
    });
  }
  if ($("#morris-donut-example").length) {
    Morris.Donut({
      element: 'morris-donut-example',
      colors: ['#76C1FA', '#F36368', '#63CF72', '#FABA66'],
      data: [{
          label: "Download Sales",
          value: 12
        },
        {
          label: "In-Store Sales",
          value: 30
        },
        {
          label: "Mail-Order Sales",
          value: 20
        }
      ]
    });
  }
  if ($('#morris-dashboard-taget').length) {
    Morris.Area({
      element: 'morris-dashboard-taget',
      parseTime: false,
      lineColors: ['#76C1FA', '#F36368', '#63CF72', '#FABA66'],
      data: [{
          y: 'Jan',
          Revenue: 190,
          Target: 170
        },
        {
          y: 'Feb',
          Revenue: 60,
          Target: 90
        },
        {
          y: 'March',
          Revenue: 100,
          Target: 120
        },
        {
          y: 'Apr',
          Revenue: 150,
          Target: 140
        },
        {
          y: 'May',
          Revenue: 130,
          Target: 170
        },
        {
          y: 'Jun',
          Revenue: 200,
          Target: 160
        },
        {
          y: 'Jul',
          Revenue: 150,
          Target: 180
        },
        {
          y: 'Aug',
          Revenue: 170,
          Target: 180
        },
        {
          y: 'Sep',
          Revenue: 140,
          Target: 90
        }
      ],
      xkey: 'y',
      ykeys: ['Target', 'Revenue'],
      labels: ['Monthly Target', 'Monthly Revenue'],
      hideHover: 'auto',
      behaveLikeLine: true,
      resize: true,
      axes: 'x'
    });
  }
});