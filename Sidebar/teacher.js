document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('searchInput').value;
    console.log('Search Query:', query);
    alert('Searching for: ' + query);
});
