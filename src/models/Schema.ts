import mongoose, { Schema, model, models } from 'mongoose';

const HouseSchema = new Schema({
    name: { type: String, required: true },
    points: { type: Number, default: 0 },
    color: { type: String, required: true }, // Hex code
    rank: { type: Number, default: 0 },
}, { timestamps: true });

export const House = models.House || model('House', HouseSchema);

const ParticipantSchema = new Schema({
    name: { type: String, required: true },
    house: { type: Schema.Types.ObjectId, ref: 'House', required: true },
    type: { type: String, enum: ['Individual', 'Group'], required: true },
}, { timestamps: true });

export const Participant = models.Participant || model('Participant', ParticipantSchema);

const EventSchema = new Schema({
    name: { type: String, required: true },
    points: { type: Number, required: true },
    winners: [{
        rank: Number, // 1, 2, 3
        participant: { type: Schema.Types.ObjectId, ref: 'Participant' },
        house: { type: Schema.Types.ObjectId, ref: 'House' },
        pointsEarned: Number,
    }],
    category: { type: String, enum: ['Individual', 'Group'], required: true },
}, { timestamps: true });

export const Event = models.Event || model('Event', EventSchema);
