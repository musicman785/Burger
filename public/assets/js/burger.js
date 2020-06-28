// Button for deletion??
// Controllers id  (router.post res.json)
// move to second list?

// Update function in public.js folder


$(function() {
  $(".change-devour").on("click", function(event) {
    event.preventDefault();
    const id = $(this).data("id");
 

    const newDevour = {
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevour
    }).then(
      function() {
        console.log("changed devour to", newDevour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
 

$(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    let newBurger = {
      burger_name: $("#bu").val().trim(),
      devoured:0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(() => location.reload());
  });
})

