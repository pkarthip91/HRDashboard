$(function() {
    // Initialize Select2 for dropdowns
    $('.select2').select2({
        width: 'resolve' // Adjust width to fit content
    });
    
    // Initialize DataTable with options
    var table = $('#leaveTable').DataTable({
        paging: false,
        ordering: true,
        searching: false,
        info: false,
        select: {
            style: 'os',
            selector: 'td:first-child'
        },
        columnDefs: [
            { orderable: false, targets: [0, 5] } // Disable sorting on checkboxes and action buttons
        ]
    });

    // Approve/Reject button click handler
    $('#leaveTable').on('click', '.approve, .reject', function() {
        var action = $(this).hasClass('approve') ? 'approved' : 'rejected';
        alert('Leave ' + action);
    });

    // Calendar navigation button handler
    $('.nav').on('click', function() {
        var direction = $(this).hasClass('prev') ? 'prev' : 'next';
        alert('Navigating to the ' + direction + ' month.');
    });

    // Tab navigation handler
    $('.tab').on('click', function() {
        // Set active tab
        $('.tab').removeClass('active');
        $(this).addClass('active');
        
        // Filter table rows based on tab's filter value
        var filterValue = $(this).data('filter');
        if (filterValue === 'all') {
            $('#leaveTable tbody tr').show();
        } else {
            $('#leaveTable tbody tr').hide();
            $('#leaveTable tbody tr[data-filter="' + filterValue + '"]').show();
        }
    });

    // Sidebar toggle handler
    $('.menu-toggle').click(function() {
        $('.sidebar').toggleClass('active');
        $('.main-content').toggleClass('sidebar-active');
    });
});
