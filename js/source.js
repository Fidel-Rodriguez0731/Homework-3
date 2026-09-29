$(function () {

    let revenueAmt = "$48,250";
    let customerNum = "1,284";
    let ordersAmt = "342";
    let issuesAmt = "12";
    let username = "UTRGV Vaqueros";
    let notifAmt = 3;

    const customers = [
        {
            "name": "Alice Johnson",
            "email": "alice@example.com",
            "status": "Active",
            "joined": "09/10/2026"
        },
        {
            "name": "Robert Smith",
            "email": "robert@example.com",
            "status": "Pending",
            "joined": "09/12/2026"
        },
        {
            "name": "Maria Garcia",
            "email": "maria@example.com",
            "status": "Active",
            "joined": "09/15/2026"
        }
    ];

    const sales = [
        {
            "product": "Product A",
            "quantity": "124",
            "revenue": "$12,400"
        },
        {
            "product": "Product B",
            "quantity": "98",
            "revenue": "$9,800"
        },
        {
            "product": "Product C",
            "quantity": "75",
            "revenue": "$7,500"
        },
    ];

    const activities = [
        {
            "message" : "New customer registered"
        },
        {
            "message" : "Order #10482 completed"
        },
        {
            "message" : "Payment received"
        },
        {
            "message" : "Support ticket created"
        }
    ];

    const messages = [
        {
            "messsage" : "All systems operational"
        },
        {
            "messsage" : "All settings loaded for this system"
        }
    ];

    const notifications = [
        {
            "messsage": "A new shipment is expected to arrive on Sep 30, 2026"
        },
        {
            "messsage": "There are 12 outstanding issues with last week's orders"
        },
        {
            "messsage": "Three new customers joined our platform in the last month"
        },
    ];

    const tasks = [
       {
            "messsage": "Review orders"
        },
        {
            "messsage": "Contact customer"
        },
        {
            "messsage": "Generate report"
        },
    ]


    // *********************************************************************
    // Do not modify the JS objects above. You will write your code below.
    // *********************************************************************
// Top Bar & Header Stats
    $("#username").text(username);
    $(".revenue-amt").text(revenueAmt);
    $("#customer-num").text(customerNum);
    $("#orders-amt").text(ordersAmt);
    $("#issues-amt").text(issuesAmt);

    // Sales Table
    sales.forEach(function (item) {
        let row = `<tr>
            <td>${item.product}</td>
            <td>${item.quantity}</td>
            <td>${item.revenue}</td>
        </tr>`;
        $("#salesTableBody").append(row);
    });

    // Activity List
    activities.forEach(function (act) {
        $("#activity-list").append($("<li>").text(act.message));
    });

    // Recent Customers Table
    customers.forEach(function (cust) {
        let statusClass = cust.status.toLowerCase() === "active" ? "status-active" : "status-pending";
        let row = `<tr>
            <td>${cust.name}</td>
            <td>${cust.email}</td>
            <td><span class="status ${statusClass}">${cust.status}</span></td>
            <td>${cust.joined}</td>
        </tr>`;
        $("#customerTableBody").append(row);
    });

    // System Status List
    messages.forEach(function (msg) {
        $("#system-status-list").append($("<li>").text(msg.messsage));
    });

    // Notifications
    $("#notification-num").text(notifAmt);
    notifications.forEach(function (notif) {
        $("#notifications-list").append($("<li>").text(notif.messsage));
    });

    // Tasks List
    tasks.forEach(function (task) {
        $("#tasks-list").append($("<li>").text(task.messsage));
    });



    // Convert all buttons to jQuery Button Widgets
    $("button").button();

    // Dashboard Tabs Widget
    $("#dashboardTabs").tabs();

    // Accordion Widget
    $("#accordion").accordion({
        collapsible: true,
        heightStyle: "content"
    });

    // Customer Dialog Widget
    $("#customerDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 400,
        buttons: {
            "Create Customer": function () {
                $(this).dialog("close");
            },
            "Cancel": function () {
                $(this).dialog("close");
            }
        }
    });

    // Open Dialog on button click
    $("#newCustomerButton").on("click", function () {
        $("#customerDialog").dialog("open");
    });

    // Datepicker Widget inside Customer Dialog
    $("#customerDate").datepicker();


    });