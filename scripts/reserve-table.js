$(document).ready(function(){
    var bookedTable = [];
    if (localStorage.getItem("bookedTable")){
        bookedTable = JSON.parse(localStorage.getItem("bookedTable"));
    } else {
        localStorage.setItem("bookedTable", JSON.stringify(bookedTable));
    };

    var selectedTable = null;
    $("#table1, #table2, #table3, #table4").each(function(){
        var tableId = $(this).attr("value");
        if (bookedTable.includes(tableId)){
            $(this).addClass("booked").removeClass("table");
        };
    });

    $("#table1, #table2, #table3, #table4").click(function(){
        var tableId = $(this).attr("value");
        if (bookedTable.includes(tableId)){
            alert("This table is not available for booking.");
        } else {
            $("#toClick").addClass("d-none");
            selectedTable = tableId;
            $("#tableID").text(tableId);
            $("#toComfirm").removeClass("d-none");
            $("#confirmation").addClass("d-none")
        }
    });

    $("#comfirmBotton").click(function(){
        bookedTable.push(selectedTable);
        $("#table1, #table2, #table3, #table4").each(function(){
            var tableId = $(this).attr("value");
            if (tableId == selectedTable){
                $(this).addClass("booked").removeClass("table");
            };
        });
        localStorage.setItem("bookedTable", JSON.stringify(bookedTable));
        $("#toComfirm").addClass("d-none");
        $("#confirmation").removeClass("d-none");
    });

    $("#dismissBotton").click(function(){
        $("#toClick").removeClass("d-none");
        $("#toComfirm").addClass("d-none");
    });
    //to reset localstorage by click title
    $("#ResetStorage").click(function(){
        localStorage.clear(bookedTable);
    });
})
