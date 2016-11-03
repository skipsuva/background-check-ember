import { test } from 'qunit';
import moduleForAcceptance from 'background-check-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | login');

test('visiting /login', function(assert) {
  visit('/login');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});

test('logging in without valid creds', function(assert) {
  visit('/login');
  fillIn('#login-email', 'skip@example.com');
  fillIn('#login-password', 'password');
  click('button');

  andThen(function() {
    assert.equal(find('#login-error').text().trim(), "You entered the wrong email or password.");
  });
});
