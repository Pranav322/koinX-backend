const express = require('express');
const router = express.Router();
const CryptoPrice = require('../models/CryptoPrice');

router.get('/stats', async (req, res) => {
  try {
    const { coin } = req.query;

    // Validate coin parameter
    const validCoins = ['bitcoin', 'ethereum', 'matic-network'];
    if (!validCoins.includes(coin)) {
      return res.status(400).json({
        error: 'Invalid coin. Must be one of: bitcoin, ethereum, matic-network',
      });
    }

    // Map API coin names to database symbols
    const coinToSymbol = {
      bitcoin: 'BTC',
      ethereum: 'ETH',
      'matic-network': 'MATIC',
    };

    // Get latest data from database
    const latestData = await CryptoPrice.findOne(
      { symbol: coinToSymbol[coin] },
      { _id: 0, __v: 0 } // Exclude these fields
    ).sort({ timestamp: -1 });

    if (!latestData) {
      return res.status(404).json({ error: 'No data found for this coin' });
    }

    // Format response according to the sample response structure
    const response = {
      price: latestData.priceUSD,
      marketCap: latestData.marketCapUSD,
      '24hChange': latestData.change24h,
    };

    res.json(response);
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
