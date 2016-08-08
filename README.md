Skeuomorphic credit card input form for meteor. A wrapper around [kenkeiter's skeuocard](https://github.com/kenkeiter/skeuocard/).

Let your users enter their credit card details directly on the card.
 
You can try out a live demo at [http://kenkeiter.com/skeuocard](http://kenkeiter.com/skeuocard).

For more on the theory behind Skeuocard, check out the blog post that started it all: [_"Redesigning Credit Card Inputs"_](http://kenkeiter.com/2013/07/21/redesigning-credit-card-inputs/) by [Ken Keiter](http://kenkeiter.com/).

![Skeuocard at its finest.](https://raw.github.com/kenkeiter/skeuocard/master/screenshot.png)

### Installation ###

```
    meteor add juto:skeuocard
```

### How to use ###

As per the instructions on ken keiter's site:

HTML

```html
    <template name="creditCardCheck">
      <div class="credit-card-input no-js" id="skeuocard">
        <p class="no-support-warning">
          Either you have Javascript disabled, or you're using an unsupported browser, amigo! That's why you're seeing this old-school credit card input form instead of a fancy new Skeuocard. On the other hand, at least you know it gracefully degrades...
        </p>
        <label for="cc_type">Card Type</label>
        <select name="cc_type">
          <option value="">...</option>
          <option value="visa">Visa</option>
          <option value="discover">Discover</option>
          <option value="mastercard">MasterCard</option>
          <option value="maestro">Maestro</option>
          <option value="jcb">JCB</option>
          <option value="unionpay">China UnionPay</option>
          <option value="amex">American Express</option>
          <option value="dinersclubintl">Diners Club</option>
        </select>
        <label for="cc_number">Card Number</label>
        <input type="text" name="cc_number" id="cc_number" placeholder="XXXX XXXX XXXX XXXX" maxlength="19" size="19">
        <label for="cc_exp_month">Expiration Month</label>
        <input type="text" name="cc_exp_month" id="cc_exp_month" placeholder="00">
        <label for="cc_exp_year">Expiration Year</label>
        <input type="text" name="cc_exp_year" id="cc_exp_year" placeholder="00">
        <label for="cc_name">Cardholder's Name</label>
        <input type="text" name="cc_name" id="cc_name" placeholder="John Doe">
        <label for="cc_cvc">Card Validation Code</label>
        <input type="text" name="cc_cvc" id="cc_cvc" placeholder="123" maxlength="3" size="3">
      </div>
      <a class="submit btn btn-primary" href="#">Next</a>
    </template>
```

Javascript

```js
    Template.creditCardCheck.onRendered(function(){
      card = new Skeuocard($("#skeuocard"));
    });
    
    Template.creditCardCheck.events({
      'click .submit'() {
        var isValid = card.isValid(); // true if the card is valid.
        alert(isValid?"Valid!":"Not Valid.");
      }
    });
```