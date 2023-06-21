
function MyCards() {
  const { useState } = React;
  const [isSubscription, setIsSubscription] = useState(false);
  const [isBurner, setIsBurner] = useState(false);
  const [search, setSearch] = useState('');

  const actualCards = [
    {
      name: 'Mixmax',
      budget_name: 'Software subscription',
      owner_id: 1,
      spent: { value: 100, currency: 'SGD' },
      available_to_spend: { value: 1000, currency: 'SGD' },
      card_type: 'burner',
      expiry: '9 feb',
      limit: 100,
      status: 'active',
    },
    {
      name: 'Quickbooks’',
      budget_name: 'Software subscription',
      owner_id: 2,
      spent: { value: 50, currency: 'SGD' },
      available_to_spend: { value: 250, currency: 'SGD' },
      card_type: 'subscription',
      limit: 10,
      status: 'active',
    },
    {
      name: 'Mixmax',
      budget_name: 'Software subscription',
      owner_id: 1,
      spent: { value: 100, currency: 'SGD' },
      available_to_spend: { value: 1000, currency: 'SGD' },
      card_type: 'burner',
      expiry: '9 feb',
      limit: 100,
      status: 'active',
    },
    
  ];

  const [cards, setCards] = useState({
    data: [
      {
        name: 'Mixmax',
        budget_name: 'Software subscription',
        owner_id: 1,
        spent: { value: 100, currency: 'SGD' },
        available_to_spend: { value: 1000, currency: 'SGD' },
        card_type: 'burner',
        expiry: '9 feb',
        limit: 100,
        status: 'active',
      },
      {
        name: 'Quickbooks',
        budget_name: 'Software subscription',
        owner_id: 2,
        spent: { value: 50, currency: 'SGD' },
        available_to_spend: { value: 250, currency: 'SGD' },
        card_type: 'subscription',
        limit: 10,
        status: 'active',
      },
      {
        name: 'Mixmax',
        budget_name: 'Software subscription',
        owner_id: 1,
        spent: { value: 100, currency: 'SGD' },
        available_to_spend: { value: 1000, currency: 'SGD' },
        card_type: 'burner',
        expiry: '9 feb',
        limit: 100,
        status: 'active',
      },
      {
        name: 'AWS Card',
        budget_name: 'Software subscription',
        owner_id: 2,
        spent: { value: 50, currency: 'SGD' },
        available_to_spend: { value: 250, currency: 'SGD' },
        card_type: 'burner',
        limit: 10,
        status: 'active',
      },
      {
        name: 'VOLOPAY',
        budget_name: 'Software subscription',
        owner_id: 2,
        spent: { value: 50, currency: 'SGD' },
        available_to_spend: { value: 250, currency: 'SGD' },
        card_type: 'subscription',
        limit: 10,
        status: 'active',
      },
      { 
        name: 'META',
        budget_name: 'Software subscription',
        owner_id: 1,
        spent: { value: 100, currency: 'SGD' },
        available_to_spend: { value: 1000, currency: 'SGD' },
        card_type: 'burner',
        expiry: '9 feb',
        limit: 100,
        status: 'active',
      },
      {
        name: 'FACEBOOK’',
        budget_name: 'Software subscription',
        owner_id: 2,
        spent: { value: 50, currency: 'SGD' },
        available_to_spend: { value: 250, currency: 'SGD' },
        card_type: 'subscription',
        limit: 10,
        status: 'active',
      },
      {
        name: 'GOT’',
        budget_name: 'Software subscription',
        owner_id: 2,
        spent: { value: 50, currency: 'SGD' },
        available_to_spend: { value: 250, currency: 'SGD' },
        card_type: 'burner',
        limit: 10,
        status: 'active',
      },
      {
        name: 'Quantico’',
        budget_name: 'Software subscription',
        owner_id: 2,
        spent: { value: 50, currency: 'SGD' },
        available_to_spend: { value: 250, currency: 'SGD' },
        card_type: 'subscription',
        limit: 10,
        status: 'active',
      },
      {
        name: 'Micromax’',
        budget_name: 'Software subscription',
        owner_id: 2,
        spent: { value: 50, currency: 'SGD' },
        available_to_spend: { value: 250, currency: 'SGD' },
        card_type: 'burner',
        limit: 10,
        status: 'active',
      },
      {
        name: 'Amazon’',
        budget_name: 'Software subscription',
        owner_id: 2,
        spent: { value: 50, currency: 'SGD' },
        available_to_spend: { value: 250, currency: 'SGD' },
        card_type: 'subscription',
        limit: 10,
        status: 'active',
      },
      {
        name: 'Vscode',
        budget_name: 'Software subscription',
        owner_id: 2,
        spent: { value: 50, currency: 'SGD' },
        available_to_spend: { value: 250, currency: 'SGD' },
        card_type: 'burner',
        limit: 10,
        status: 'active',
      },
      {
        name: 'Byjus',
        budget_name: 'Software subscription',
        owner_id: 2,
        spent: { value: 50, currency: 'SGD' },
        available_to_spend: { value: 250, currency: 'SGD' },
        card_type: 'subscription',
        limit: 10,
        status: 'active',
      },
      {
        name: 'Zomato',
        budget_name: 'Software subscription',
        owner_id: 2,
        spent: { value: 50, currency: 'SGD' },
        available_to_spend: { value: 250, currency: 'SGD' },
        card_type: 'burner',
        limit: 10,
        status: 'active',
      },
      {
        name: 'PayTm',
        budget_name: 'Software subscription',
        owner_id: 2,
        spent: { value: 50, currency: 'SGD' },
        available_to_spend: { value: 250, currency: 'SGD' },
        card_type: 'subscription',
        limit: 10,
        status: 'active',
      },
      {
        name: 'Phonepay',
        budget_name: 'Software subscription',
        owner_id: 2,
        spent: { value: 50, currency: 'SGD' },
        available_to_spend: { value: 250, currency: 'SGD' },
        card_type: 'burner',
        limit: 10,
        status: 'active',
      },
    ],
    page: 1,
    per_page: 10,
    total: 100,
  });

  function handleCheck(type, isValid) {
    if (!isValid) {
      const filteredCards = actualCards.filter((card) => {
        return card.card_type == type;
      });
      setCards({ ...cards, data: filteredCards });
    } else setCards({ ...cards, data: actualCards });

    if (type == 'subscription') setIsSubscription(!isSubscription);
    if (type == 'burner') setIsBurner(!isBurner);
  }

  function filterBySearch(input) {
    if (input) {
      const filteredCards = actualCards.filter((card) => {
        return card.name.toLowerCase().includes(input.toLowerCase());
      });
      setCards({ ...cards, data: filteredCards });
    } else setCards({ ...cards, data: actualCards });
  }
  return (
    <div>
      <div className='container mt-5'>
        <div className='container mb-4 row align-items-center'>
          <input
            type='text'
            className='search-input col-6'
            placeholder='Enter Card Name'
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              filterBySearch(e.target.value);
            }}
          />
          <div className='row col-4 justify-content-around'>
            <div className='row'>
              <input
                value={isSubscription}
                type='checkbox'
                onChange={() => {
                  handleCheck('subscription', isSubscription);
                }}
              />
              <div className='card_budget_title ml-2'>Subscription</div>
            </div>

            <div className='row'>
              <input
                value={isBurner}
                type='checkbox'
                onChange={() => {
                  handleCheck('burner', isBurner);
                }}
              />
              <div className='card_budget_title ml-2'>Burner</div>
            </div>
          </div>
        </div>
        <div className='row col-12'>
          {cards.data.map((card) => {
            return (
              <div className='col-4 h-100 p-1'>
                <div className='card pt-4 pb-4 p-3'>
                  <div className='row col-12 align-items-center'>
                    <div className='col-9'>
                      <div className='card_title'>{card.name}</div>
                      <div className='card_budget_title'>{card.budget_name}</div>
                    </div>
                    <div className='col-3'>{card.card_type == 'burner' ? <i class='bi bi-fire'></i> : <i class='bi bi-arrow-repeat'></i>}</div>
                  </div>

                  <div className='row col-12 mt-3'>
                    <div className='col-4'>
                      <div className='grey_txt'>Amount</div>
                      <div>300 SGD</div>
                    </div>
                    <div className='col-4'>
                      <div className='grey_txt'>Frequency</div>
                      <div>300 SGD</div>
                    </div>
                    <div className='col-4'>
                      <div className='grey_txt'>{card.card_type == 'burner' ? 'Expiry' : 'Limit'}</div>
                      <div>{card.card_type == 'burner' ? card.expiry : card.limit}</div>
                    </div>
                  </div>

                  <div className='d-flex w-100 pl-4 pr-4 mt-3 mb-3'>
                    <div className='green-line' style={{ width: (card.spent.value / (card.available_to_spend.value + card.spent.value)) * 100 + '%' }}></div>
                    <div className='red-line' style={{ width: (card.available_to_spend.value / (card.available_to_spend.value + card.spent.value)) * 100 + '%' }}></div>
                  </div>

                  <div className='container pl-4 pr-4'>
                    <div className='row justify-content-between'>
                      <div className='grey_txt'>Spend</div>
                      <div>{card.spent.value}</div>
                    </div>
                    <div className='row justify-content-between'>
                      <div className='grey_txt'>Balance</div>
                      <div className='bold'>{card.available_to_spend.value}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('myCards')).render(<MyCards />);
