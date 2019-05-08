<template>
  <div class="checkout">
      <vue-stripe-checkout
      ref="checkoutRef"
      :image="image"
      :name="name"
      :description="description"
      :currency="currency"
      :amount="amount"
      :allow-remember-me="false"
      @done="done"
      @opened="opened"
      @closed="closed"
      @canceled="canceled"
    ></vue-stripe-checkout>
    <button @click="checkout">Sell black matter gun</button>
  </div>
</template>


<script>
export default {
  data() {
    return {
      image: 'https://i.imgur.com/HhqxVCW.jpg',
      name: 'Shut up and take my money!',
      description: 'Cats are the best dog!',
      currency: 'PHP',
      amount: 99999
    }
  },
  methods: {
    async checkout () {
      // token - is the token object
      // args - is an object containing the billing and shipping address if enabled
      const { token, args } = await this.$refs.checkoutRef.open();
      console.log(JSON.stringify(args))
    },
    done ({token, args}) {
      // token - is the token object
      // args - is an object containing the billing and shipping address if enabled
      // do stuff...
      console.log(JSON.stringify(args))
    },
    opened () {
      // do stuff 
      alert('opened')
    },
    closed () {
      // do stuff 
      alert('closed')
    },
    canceled () {
      // do stuff 
    }
  }
}
</script>