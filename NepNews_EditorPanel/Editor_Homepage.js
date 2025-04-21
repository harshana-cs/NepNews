document.addEventListener('DOMContentLoaded', function () {
    // Reject Dialog
    const showDialogButton = document.getElementById('showDialog');
    const dialog = document.getElementById('dialog');
    const cancelButton = document.getElementById('cancel-btn');
    const rejectConfirmButton = document.getElementById('reject-confirm');

    if (showDialogButton) {
        showDialogButton.addEventListener('click', function () {
            dialog.style.display = 'block';
        });
    }

    if (cancelButton) {
        cancelButton.addEventListener('click', function () {
            dialog.style.display = 'none';
        });
    }

    if (rejectConfirmButton) {
        rejectConfirmButton.addEventListener('click', function () {
            alert('Article rejected!'); 
            dialog.style.display = 'none';
        });
    }

    // Resend Dialog
    const showResendDialogButton = document.getElementById('showResendDialog');
    const resendDialog = document.getElementById('resendDialog');
    const submitResendButton = document.getElementById('submitResend');

    if (showResendDialogButton) {
        showResendDialogButton.addEventListener('click', function () {
            resendDialog.style.display = 'block';
        });
    }

    if (submitResendButton) {
        submitResendButton.addEventListener('click', function () {
            alert('Resend submitted!');
            resendDialog.style.display = 'none';
        });
    }

    // Approve Dialog
    const approveButton = document.getElementById('approveButton');
    const approveDialog = document.getElementById('approveDialog');
    const approveOkButton = document.getElementById('approveOkButton');

    if (approveButton) {
        approveButton.addEventListener('click', function () {
            approveDialog.style.display = 'block';
        });
    }

    if (approveOkButton) {
        approveOkButton.addEventListener('click', function () {
            approveDialog.style.display = 'none';
            alert('Article Approved!');
        });
    }

    // Edit Button - Redirect to Editor Page
    const editButton = document.querySelector('.edit_button');
    if (editButton) {
        editButton.addEventListener('click', function () {
            window.location.href = "Artical_editor.html";
        });
    }
});
