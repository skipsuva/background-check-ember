import { test } from 'qunit';
import moduleForAcceptance from 'background-check-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | search');

test('visiting /search', function(assert) {
  visit('/search');

  andThen(function() {
    assert.equal(currentURL(), '/search');
  });
});

test('searching without valid email', function(assert) {
  visit('/search');
  fillIn('#search-input', 'testman');
  click('button');

  andThen(function() {
    assert.equal(find('#search-error').text().trim(), "Please enter a valid email address.");
  });
});

test('searching with valid email', function(assert) {
  visit('/search');
  fillIn('#search-input', 'testman@example.com');
  click('button');

  andThen(function() {
    assert.equal(currentURL(), '/report?email=testman%40example.com');
  });
});
