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

test('logging in with valid creds', function(assert) {
  visit('/login');
  window.localStorage = storageMock();
  window.localStorage.setItem('users', JSON.stringify(["skip@example.com"]));

  fillIn('#login-email', 'skip@example.com');
  fillIn('#login-password', 'BV-API-Challenge');
  click('button');

  andThen(function() {
    assert.equal(currentURL(), '/search');
  });
});

function storageMock() {
  var storage = {};

  return {
    setItem: function(key, value) {
      storage[key] = value || '';
    },
    getItem: function(key) {
      return storage[key] || null;
    },
    removeItem: function(key) {
      delete storage[key];
    },
    get length() {
      return Object.keys(storage).length;
    },
    key: function(i) {
      var keys = Object.keys(storage);
      return keys[i] || null;
    }
  };
}
