
$(function() {

        ///////////////////////////////////////////////////////////
        // COUNTERS
        $('.counter-init').countTo({
            speed: 1500
        });

        ///////////////////////////////////////////////////////////
        // ADJUSTABLE TEXTAREA
        autosize($('#textarea'));

        ///////////////////////////////////////////////////////////
        // CUSTOM SCROLL
        if (!cleanUI.hasTouch) {
            $('.custom-scroll').each(function() {
                $(this).jScrollPane({
                    autoReinitialise: true,
                    autoReinitialiseDelay: 100
                });
                var api = $(this).data('jsp'),
                throttleTimeout;
                $(window).bind('resize', function() {
                    if (!throttleTimeout) {
                        throttleTimeout = setTimeout(function() {
                            api.reinitialise();
                            throttleTimeout = null;
                        }, 50);
                    }
                });
            });
        }

        ///////////////////////////////////////////////////////////
        // CALENDAR
        $('.example-calendar-block').fullCalendar({
            //aspectRatio: 2,
            height: 450,
            header: {
                left: 'prev, next',
                center: 'title',
                right: 'month, agendaWeek, agendaDay'
            },
            buttonIcons: {
                prev: 'none fa fa-arrow-left',
                next: 'none fa fa-arrow-right',
                prevYear: 'none fa fa-arrow-left',
                nextYear: 'none fa fa-arrow-right'
            },
            editable: true,
            eventLimit: true, // allow "more" link when too many events
            viewRender: function(view, element) {
                if (!cleanUI.hasTouch) {
                    $('.fc-scroller').jScrollPane({
                        autoReinitialise: true,
                        autoReinitialiseDelay: 100
                    });
                }
            },
            defaultDate: '2016-08-12',
            events: [
            {
                title: 'Done',
                start: '2016-08-01',
                className: 'fc-event-success'
            },
            {
                id: 999,
                title: 'Pending',
                start: '2016-08-09',
                end: '2016-08-11',
                className: 'fc-event-default'
            },
            {
                id: 999,
                title: 'Done',
                start: '2016-08-16',
                className: 'fc-event-success'
            },
            {
                title: 'Maintenance',
                start: '2016-08-11',
                end: '2016-08-14',
                className: 'fc-event-danger'
            }
            ],
            eventClick: function(calEvent, jsEvent, view) {
                if (!$(this).hasClass('event-clicked')) {
                    $('.fc-event').removeClass('event-clicked');
                    $(this).addClass('event-clicked');
                }
            }
        });

        ///////////////////////////////////////////////////////////
        // CAROUSEL WIDGET
        $('.carousel-widget').carousel({
            interval: 4000
        });

        $('.carousel-widget-2').carousel({
            interval: 6000
        });

        ///////////////////////////////////////////////////////////
        // DATATABLES
        $('#example1').DataTable({
            responsive: true,
            "lengthMenu": [[5, 25, 50, -1], [5, 25, 50, "All"]]
        });

        ///////////////////////////////////////////////////////////
        // CHART 1
        new Chartist.Line(".chart-line", {
            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            series: [
            [12, 9, 7, 8, 5],
            [2, 1, 3.5, 7, 3],
            [1, 3, 4, 5, 6]
            ]
        }, {
            fullWidth: !0,
            chartPadding: {
                right: 40
            },
            plugins: [
            Chartist.plugins.tooltip()
            ]
        });

        ///////////////////////////////////////////////////////////
        // CHART 2
        var overlappingData = {
            labels: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            series: [
            [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
            [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
            ]
        },
        overlappingOptions = {
            seriesBarDistance: 10,
            plugins: [
            Chartist.plugins.tooltip()
            ]
        },
        overlappingResponsiveOptions = [
        ["", {
            seriesBarDistance: 5,
            axisX: {
                labelInterpolationFnc: function(value) {
                    return value[0]
                }
            }
        }]
        ];

        new Chartist.Bar(".chart-overlapping-bar", overlappingData, overlappingOptions, overlappingResponsiveOptions);


    });
