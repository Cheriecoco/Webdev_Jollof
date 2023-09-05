document.addEventListener("DOMContentLoaded", function() {
    // Get references to the elements
    const pollOptions = document.querySelectorAll('input[name="jollof"]');
    const voteButton = document.getElementById("vote-button");
    const nigerianResult = document.getElementById("nigerian-result");
    const ghanaianResult = document.getElementById("ghanaian-result");

    // Initialize vote counts
    let nigerianVotes = 0;
    let ghanaianVotes = 0;

    // Event listener for the Vote button
    voteButton.addEventListener("click", () => {
        const selectedOption = document.querySelector('input[name="jollof"]:checked');
        if (selectedOption) {
            // Update vote counts based on the selected option
            const optionValue = selectedOption.value;
            if (optionValue === "nigerian") {
                nigerianVotes++;
            } else if (optionValue === "ghanaian") {
                ghanaianVotes++;
            }

            // Update the result elements
            nigerianResult.textContent = `Nigerian Jollof: ${nigerianVotes} votes`;
            ghanaianResult.textContent = `Ghanaian Jollof: ${ghanaianVotes} votes`;
        }
    }); 
}); 
