import { Form, Input, Button } from "antd";
import React, { useState } from "react";

export default function SearchMovies() {

    //states- input query, movies
    const [query, setQuery] = useState('');

    const searchMovies = async (e) => {
        console.log(e)
        //e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <Form className="form" onFinish={searchMovies}>
            <Form.Item label="Movie Title" rules={[{
                required: true,
                message: 'Please enter movie title',
            },
            ]}>
                <Input className="input" type="text" name="query"
                    placeholder="i.e. Jurassic Park"
                    value={query} onChange={(e) => setQuery(e.target.value)}
                />
            </Form.Item>
            <Button className="mt-3" type="primary" htmlType="submit">Search</Button>
        </Form>
    )
}