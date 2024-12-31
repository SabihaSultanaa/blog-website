'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Comment {
  id: number;
  author: string;
  content: string;
  date: string;
}

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim() === '' || authorName.trim() === '') return;

    const comment: Comment = {
      id: Date.now(),
      author: authorName.trim(),
      content: newComment,
      date: new Date().toLocaleDateString()
    };

    setComments([...comments, comment]);
    setNewComment('');
    setAuthorName('');
  };

  return (
    <div className="mt-12 bg-gray-900 p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-white mb-6">Comments</h2>
      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <Input
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          placeholder="Your Name (required)"
          className="w-full bg-gray-800 text-white"
          required
        />
        <Textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="w-full bg-gray-800 text-white"
          required
        />
        <Button 
          type="submit" 
          className="bg-purple-500 hover:bg-purple-600 text-white"
          disabled={!authorName.trim() || !newComment.trim()}
        >
          Post Comment
        </Button>
      </form>
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex space-x-4">
            <Avatar>
              <AvatarImage src="/placeholder-avatar.jpg" alt={comment.author} />
              <AvatarFallback>{comment.author[0].toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">{comment.author}</h3>
                <span className="text-sm text-gray-400">{comment.date}</span>
              </div>
              <p className="mt-1 text-gray-300">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


