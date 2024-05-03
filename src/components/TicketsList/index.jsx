import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter, setSortBy } from './actions';
import Ticket from './Ticket';

const TicketsList = () => {
  const dispatch = useDispatch();
  const tickets = useSelector(state => state.tickets);
  const filter = useSelector(state => state.filter);
  const sortBy = useSelector(state => state.sortBy);

  const [filteredTickets, setFilteredTickets] = useState([]);

  useEffect(() => {
    // Функція фільтрації квитків
    const filterTickets = () => {
      if (filter === 'all') {
        setFilteredTickets(tickets);
      } else {
        const filtered = tickets.filter(ticket => ticket.stops === parseInt(filter));
        setFilteredTickets(filtered);
      }
    };

    // Функція сортування квитків
    const sortTickets = () => {
      const compareFunc = (a, b) => {
        switch (sortBy) {
          case 'cheapest':
            return a.price - b.price;
          case 'fastest':
            return a.duration - b.duration;
          case 'optimal':
            if (a.duration !== b.duration) {
              return a.duration - b.duration;
            } else if (a.stops !== b.stops) {
              return a.stops - b.stops;
            } else {
              return a.price - b.price;
            }
          default:
            return 0;
        }
      };

      const sorted = filteredTickets.slice().sort(compareFunc);
      setFilteredTickets(sorted);
    };

    filterTickets();
    sortTickets();
  }, [tickets, filter, sortBy]);

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  const handleSortByChange = (event) => {
    dispatch(setSortBy(event.target.value));
  };

  return (
    <div>
      {/* Реалізація компонентів логотипу, фільтру та сортування */}
      {/* Тут вставте код для компонентів логотипу, фільтру та сортування */}

      {/* Виведення квитків */}
      {filteredTickets.map(ticket => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}
      
      {/* Кнопка "Завантажити ще квитки" */}
      {/* Тут вставте код для кнопки "Завантажити ще квитки" */}
    </div>
  );
};

export default TicketsList;
