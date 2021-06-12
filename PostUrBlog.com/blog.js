function scrollToTop() {
    window.onbeforeunload = function() {
        window.scrollTo(0, 0);
    };
}

function showToast(num) {
    let x = document.getElementById("snackbar");
    let existingToast = document.getElementById("para");
    if (existingToast != null) {
        existingToast.remove();
    }
    let message = document.createElement("p");
    message.setAttribute("id", "para");

    let toast = "";
    if (num == 1) {
        toast = document.createTextNode("Blog added successfully");
    } else {
        toast = document.createTextNode("Message sent successfully");
    }
    message.appendChild(toast);
    x.appendChild(message);
    x.className = "show";
    setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
}
scrollToTop();

var blogs = [{
        "id": 1,
        "title": "Photography",
        "content": "While most photographers specialize in one or two different types of photography experimenting with various photography styles can help to expand your skill set." +
            "The technical and creative skills required often cross multiple photography genres."

    },
    {
        "id": 2,
        "title": "Travel",
        "content": "The origin of the word Travel is most likely lost to history. The term Travel may originate from the Old French word travail, which means 'work'. "
    }
];

function addBlog() {
    let title = document.getElementById("blog-title").value;
    let content = document.getElementById("blog-content").value;
    if (title != null && title != "" && content != null && content != "") {
        let count = blogs.length + 1;
        let blog = {
            "id": count,
            "title": title,
            "content": content
        }
        blogs.push(blog);
        showToast(1);
        document.getElementById("blog-title").value = "";
        document.getElementById("blog-content").value = "";
    }

    display();
}

function display() {
    let textClass = "white-text";
    let contentDiv = document.getElementById("blogs");
    contentDiv.setAttribute("class", textClass);
    let existingList = document.getElementById("blog-list");
    let listTag = "";
    if (existingList == null) {
        listTag = document.createElement("div");
        listTag.setAttribute("id", "blog-list");
        listTag.setAttribute("class", "row");
    } else {
        listTag = existingList;
        listTag.scrollTop = listTag.scrollHeight;
    }
    let boldText = "bold-text";
    let textWrap = "text-wrap";

    for (let i = 0; i < blogs.length; i++) {
        let existingItem = document.getElementById(i + 1);
        if (existingItem == null) {
            let listItem = document.createElement("div");
            listItem.setAttribute("id", i + 1);
            let colClass = "col-sm-6 col-md-4 div-item";
            listItem.setAttribute("class", colClass);
            let h2 = document.createElement("h4");
            h2.setAttribute("class", boldText);
            let paragraph = document.createElement("p");
            paragraph.setAttribute("class", textWrap);
            let blogTitle = blogs[i].title;
            let blogContent = blogs[i].content;
            h2.appendChild(document.createTextNode(blogTitle));
            paragraph.appendChild(document.createTextNode(blogContent));
            listItem.appendChild(h2);
            listItem.appendChild(paragraph);
            listTag.appendChild(listItem);
        }

    }
    contentDiv.appendChild(listTag);
}
display();

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    if (name != null && name != "" && email != null && email != "" &&
        subject != null && subject != "" && message != null && message != "") {
        showToast(2);
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
    }
}