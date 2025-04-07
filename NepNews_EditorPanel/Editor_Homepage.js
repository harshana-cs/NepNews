document.addEventListener('DOMContentLoaded', function() {
    const showDialogButton = document.getElementById('showDialog');
    const dialog = document.getElementById('dialog');
    const cancelButton = document.getElementById('cancel-btn');
    const rejectConfirmButton = document.getElementById('reject-confirm');

    showDialogButton.addEventListener('click', function() {
        dialog.style.display = 'block';
    });

    cancelButton.addEventListener('click', function() {
        dialog.style.display = 'none';
    });

    rejectConfirmButton.addEventListener('click', function() {
        alert('Article rejected!'); // Replace with your desired action
        dialog.style.display = 'none';
    });
    const showResendDialogButton = document.getElementById('showResendDialog');
    const resendDialog = document.getElementById('resendDialog');
    const submitResendButton = document.getElementById('submitResend');

    showResendDialogButton.addEventListener('click', function() {
        resendDialog.style.display = 'block';
    });

    submitResendButton.addEventListener('click', function() {
        // Handle submission logic here
        alert('Resend submitted!'); // Replace with your actual submission logic
        resendDialog.style.display = 'none';
    });
});
