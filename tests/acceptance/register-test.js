import { test } from 'qunit';
import moduleForAcceptance from 'background-check-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | register');

test('visiting /register', function(assert) {
  visit('/register');

  andThen(function() {
    assert.equal(currentURL(), '/register');
  });
});

test('registering without valid creds', function(assert) {
  visit('/register');
  fillIn('#email', 'testman');
  click('button');

  andThen(function() {
    assert.equal(find('#register-error').text().trim(), "Please enter a valid email address.");
  });
});

test('registering with valid creds', function(assert) {
  visit('/register');
  fillIn('#email', 'testman@example.com');
  click('button');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});
