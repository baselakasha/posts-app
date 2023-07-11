window.onload = function() {
    $("#save-post").click(function(e) {
        let content = $("#post-content").val();
        let response = $.ajax({
            url: "/api/post/",
            type: "POST",
            data: {
                content: content,
                csrfmiddlewaretoken: $("input[name=csrfmiddlewaretoken]").val()
            },
            success: function(data) {
                $("#add-post-modal").removeClass("is-active");
                $("#post-content").val("");
                show_posts();
            }
        });
    });
    show_posts();
}

function show_posts(){
    let template = $($("#post-template").html());
    $.ajax({
        url: "/api/post/",
        type: "GET",
        success: function(data) {
            $("#post-list").html("");
            for (let i = 0; i < data.length; i++) {
                let post = data[i];
                let date = new Date(post.created_at);

                template.find(".post-content").text(post.content);
                template.find(".post-author").text(post.author.__str__);
                template.find(".post-date").text(date.toLocaleString());
                $("#post-list").append(template.clone());
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
        $el.classList.add('is-active');
    }

    function closeModal($el) {
        $el.classList.remove('is-active');
    }

    function closeAllModals() {
        (document.querySelectorAll('.modal') || []).forEach(($modal) => {
            closeModal($modal);
        });
    }

    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
        const modal = $trigger.dataset.target;
        const $target = document.getElementById(modal);

        $trigger.addEventListener('click', () => {
            openModal($target);
        });
    });

    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot') || []).forEach(($close) => {
        const $target = $close.closest('.modal');

        $close.addEventListener('click', () => {
            closeModal($target);
        });
    });

    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
        const e = event || window.event;

        if (e.keyCode === 27) { // Escape key
            closeAllModals();
        }
    });
});