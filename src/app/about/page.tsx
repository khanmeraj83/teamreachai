'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { initialItems } from '../data/mockData';
import { Item } from '../Types/types';

const AboutPage: React.FC = () => {
  const [items, setItems] = useState<Item[]>(initialItems);
  const targetRef = useRef<HTMLDivElement>(null);

  const handleEdit = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, editable: !item.editable } : item
      )
    );
  };

  const handleAdd = () => {
    const newItem: Item = {
      id: items.length + 1,
      heading: 'New Heading',
      content: 'New content',
      editable: true,
    };
    setItems((prev) => [...prev, newItem]);
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleChange = (
    id: number,
    field: 'heading' | 'content',
    value: string
  ) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  return (
    <div className='article-container'>
      <div className='faded-dots'></div>
      <h1>Adapting Your Constitution to Contemporary Governance Trends</h1>
      <p style={{ fontSize: '16px', color: '#333', lineHeight: '1.6' }}>
        It’s crucial that your organization’s constitution keeps pace with these
        changes. Failing to update your governance framework to reflect modern
        trends can leave your organization behind, struggling with outdated
        practices that no longer serve its best interests. Here are some of the
        key governance trends that should be reflected in your constitution:
      </p>
      <div className='add'>
        <button className='action' onClick={handleAdd}>
          <Image
            src='/icon-plus.svg'
            alt='Add'
            width={800}
            height={600}
            layout='responsive'
          />
        </button>
      </div>
      <div className='article-content' ref={targetRef}>
        {items.map((item, index) => (
          <div key={item.id}>
            {item.editable ? (
              <>
                <input
                  type='text'
                  value={item.heading}
                  className='headingInput'
                  onChange={(e) =>
                    handleChange(item.id, 'heading', e.target.value)
                  }
                />
                <textarea
                  className='contentTextarea'
                  value={item.content}
                  onChange={(e) =>
                    handleChange(item.id, 'content', e.target.value)
                  }
                />
                <div className='saveContainer'>
                  <button
                    className='saveButton'
                    onClick={() => handleEdit(item.id)}
                  >
                    Save
                  </button>
                </div>
              </>
            ) : (
              <>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <h2>
                    {`${index + 1}. `} {item.heading}
                  </h2>
                  <button
                    className='action'
                    onClick={() => handleEdit(item.id)}
                  >
                    <Image
                      src='/icon-edit.svg'
                      alt='Edit'
                      width={800}
                      height={600}
                      layout='responsive'
                    />
                  </button>
                </div>

                <p>{item.content}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
