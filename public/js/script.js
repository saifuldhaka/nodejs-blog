function hidePost(id) {
    $('#postHideId').val(id);
    $('#myModalHide').modal('show');
}

function postHideConfirm() {
    $('#myModalHide').modal('toggle');
    var id = $('#postHideId').val();

    var request = $.ajax({
        url: "/posts/update-post-status",
        method: "POST",
        data: { id: id, status: 0 },
        dataType: "html"
    });

    request.done(function (msg) {
        window.location.reload();
    });

    request.fail(function (jqXHR, textStatus) {
        alert('error');
    });
}

function showPost(id) {
    $('#postShowId').val(id);
    $('#myModalShow').modal('show');
}

function postShowConfirm() {
    $('#myModalShow').modal('toggle');
    var id = $('#postShowId').val();

    var request = $.ajax({
        url: "/posts/update-post-status",
        method: "POST",
        data: { id: id, status: 1 },
        dataType: "html"
    });

    request.done(function (msg) {
        window.location.reload();
    });

    request.fail(function (jqXHR, textStatus) {
        alert('error');
    });
}

function deletePost(id) {
    $('#postDeleteId').val(id);
    $('#myModalDelete').modal('show');
}

function postDeleteConfirm() {
    $('#myModalDelete').modal('toggle');
    var id = $('#postDeleteId').val();

    var request = $.ajax({
        url: "/posts/update-post-status",
        method: "POST",
        data: { id: id, status: 2 },
        dataType: "html"
    });

    request.done(function (msg) {
        window.location.reload();
    });

    request.fail(function (jqXHR, textStatus) {
        alert('error');
    });
}

function showComment(id) {
    $('#commentShowId').val(id);
    $('#myModalShow').modal('show');
}

function hideComment(id) {
    $('#commentHideId').val(id);
    $('#myModalHide').modal('show');
}


function deleteComment(id) {
    $('#commentDeleteId').val(id);
    $('#myModalDelete').modal('show');
}

function commentHideConfirm() {
    $('#myModalHide').modal('toggle');
    var id = $('#commentHideId').val();

    var request = $.ajax({
        url: "/posts/update-comment",
        method: "POST",
        data: { id: id, status: 0 },
        dataType: "html"
    });

    request.done(function (msg) {
        window.location.reload();
    });

    request.fail(function (jqXHR, textStatus) {
        alert('error');
    });
}

function commentShowConfirm() {
    $('#myModalShow').modal('toggle');
    var id = $('#commentShowId').val();

    var request = $.ajax({
        url: "/posts/update-comment",
        method: "POST",
        data: { id: id, status: 1 },
        dataType: "html"
    });

    request.done(function (msg) {
        window.location.reload();
    });

    request.fail(function (jqXHR, textStatus) {
        alert('error');
    });
}

function commentDeleteConfirm() {
    $('#myModalDelete').modal('toggle');
    var id = $('#commentDeleteId').val();

    var request = $.ajax({
        url: "/posts/update-comment",
        method: "POST",
        data: { id: id, status: 2 },
        dataType: "html"
    });

    request.done(function (msg) {
        window.location.reload();
    });

    request.fail(function (jqXHR, textStatus) {
        alert('error');
    });
}

