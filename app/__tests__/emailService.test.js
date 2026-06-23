import { sendEmail, logEmail, optIn, optOut } from '../emailService';

jest.mock('@sendgrid/mail', () => ({
  setApiKey: jest.fn(),
  send: jest.fn().mockResolvedValue({}),
}));

describe('Email Service', () => {
  it('should send an email', async () => {
    await sendEmail('test@example.com', 'Test Subject', '<h1>Test</h1>');
    expect(require('@sendgrid/mail').send).toHaveBeenCalledWith(expect.objectContaining({
      to: 'test@example.com',
      subject: 'Test Subject',
    }));
  });

  it('should log an email', () => {
    console.log = jest.fn();
    logEmail('test@example.com', 'Test Subject');
    expect(console.log).toHaveBeenCalledWith('Email sent to test@example.com with subject: Test Subject');
  });

  it('should opt-in a user', () => {
    console.log = jest.fn();
    optIn('user123');
    expect(console.log).toHaveBeenCalledWith('User user123 opted in for emails.');
  });

  it('should opt-out a user', () => {
    console.log = jest.fn();
    optOut('user123');
    expect(console.log).toHaveBeenCalledWith('User user123 opted out of emails.');
  });
});
