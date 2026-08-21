document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-lumina-form]').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const feedback = form.querySelector('.lumina-form-feedback');
      feedback.textContent = '상담 접수 채널을 준비하고 있습니다. 연결 후 이 내용은 담당자에게 전달됩니다.';
      form.reset();
    });
  });
});
